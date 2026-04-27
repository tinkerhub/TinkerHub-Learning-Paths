(function () {
  var article = document.querySelector("article[data-page-slug]");
  if (!article) return;

  var pageSlug = article.dataset.pageSlug;
  var contentSection = article.querySelector(".content");
  if (!contentSection) return;

  var headings = contentSection.querySelectorAll("h2[id], h3[id]");
  if (!headings.length) return;

  var saveTimer = null;
  var checkedIds = loadLocal();

  // Build checkboxes on content headings
  headings.forEach(function (h) {
    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "progress-check";
    cb.checked = checkedIds.indexOf(h.id) !== -1;
    cb.setAttribute("aria-label", "Mark " + h.textContent.trim() + " as completed");
    if (cb.checked) h.classList.add("completed");

    cb.addEventListener("change", function () {
      toggleHeading(h.id, cb.checked);
      h.classList.toggle("completed", cb.checked);
      updateToc();
      updateProgressBar();
      saveLocal();
      scheduleSyncToServer();
    });

    h.insertBefore(cb, h.firstChild);
  });

  // Build TOC checkboxes
  var tocNav = document.querySelector("nav .sticky");
  if (tocNav) {
    var tocLinks = tocNav.querySelectorAll("#TableOfContents a");
    tocLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;
      var targetId = href.replace(/^#/, "");
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "toc-check";
      cb.checked = checkedIds.indexOf(targetId) !== -1;
      cb.setAttribute("aria-label", "Mark " + link.textContent.trim() + " as completed");
      cb.dataset.targetId = targetId;

      cb.addEventListener("change", function () {
        toggleHeading(targetId, cb.checked);
        var contentCb = contentSection.querySelector("#" + CSS.escape(targetId) + " .progress-check");
        if (contentCb) {
          contentCb.checked = cb.checked;
          contentCb.closest("h2, h3").classList.toggle("completed", cb.checked);
        }
        updateProgressBar();
        saveLocal();
        scheduleSyncToServer();
      });

      link.parentNode.insertBefore(cb, link);
    });

    // Add progress bar
    var progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";
    progressContainer.innerHTML =
      '<div class="progress-bar"><div class="progress-fill"></div></div>' +
      '<span class="progress-text"></span>';
    var contentsHeading = tocNav.querySelector("h1");
    if (contentsHeading) {
      contentsHeading.after(progressContainer);
    } else {
      tocNav.prepend(progressContainer);
    }
  }

  updateToc();
  updateProgressBar();

  // On login, merge server state
  document.addEventListener("identity:login", function () {
    fetchFromServer().then(function (serverIds) {
      if (serverIds && serverIds.length) {
        var merged = mergeUnique(checkedIds, serverIds);
        checkedIds = merged;
        applyState();
        saveLocal();
        syncToServer();
      } else {
        syncToServer();
      }
    });
  });

  document.addEventListener("identity:logout", function () {
    // Keep localStorage, stop syncing
  });

  // Initial server fetch if logged in
  if (getUser()) {
    fetchFromServer().then(function (serverIds) {
      if (serverIds && serverIds.length) {
        checkedIds = mergeUnique(checkedIds, serverIds);
        applyState();
        saveLocal();
      }
    });
  }

  function toggleHeading(id, checked) {
    if (checked && checkedIds.indexOf(id) === -1) {
      checkedIds.push(id);
    } else if (!checked) {
      checkedIds = checkedIds.filter(function (x) { return x !== id; });
    }
  }

  function applyState() {
    headings.forEach(function (h) {
      var cb = h.querySelector(".progress-check");
      var isChecked = checkedIds.indexOf(h.id) !== -1;
      if (cb) cb.checked = isChecked;
      h.classList.toggle("completed", isChecked);
    });
    updateToc();
    updateProgressBar();
  }

  function updateToc() {
    var tocChecks = document.querySelectorAll(".toc-check");
    tocChecks.forEach(function (cb) {
      cb.checked = checkedIds.indexOf(cb.dataset.targetId) !== -1;
    });
  }

  function updateProgressBar() {
    var total = headings.length;
    var done = checkedIds.length;
    var fill = document.querySelector(".progress-fill");
    var text = document.querySelector(".progress-text");
    if (fill) fill.style.width = (total ? (done / total) * 100 : 0) + "%";
    if (text) text.textContent = done + "/" + total + " completed";
  }

  function loadLocal() {
    try {
      var data = JSON.parse(localStorage.getItem("progress:" + pageSlug));
      return (data && data.checkedIds) || [];
    } catch (e) {
      return [];
    }
  }

  function saveLocal() {
    localStorage.setItem("progress:" + pageSlug, JSON.stringify({ checkedIds: checkedIds }));
  }

  function getUser() {
    return window.netlifyIdentity && window.netlifyIdentity.currentUser();
  }

  function getToken() {
    var user = getUser();
    return user && user.token && user.token.access_token;
  }

  function scheduleSyncToServer() {
    if (!getUser()) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(syncToServer, 500);
  }

  function syncToServer() {
    var token = getToken();
    if (!token) return;
    fetch("/.netlify/functions/progress-save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ pageSlug: pageSlug, checkedIds: checkedIds }),
    }).catch(function () {});
  }

  function fetchFromServer() {
    var token = getToken();
    if (!token) return Promise.resolve(null);
    return fetch("/.netlify/functions/progress-get?page=" + encodeURIComponent(pageSlug), {
      headers: { Authorization: "Bearer " + token },
    })
      .then(function (r) { return r.json(); })
      .then(function (d) { return d.checkedIds || []; })
      .catch(function () { return null; });
  }

  function mergeUnique(a, b) {
    var set = {};
    a.concat(b).forEach(function (id) { set[id] = true; });
    return Object.keys(set);
  }
})();
