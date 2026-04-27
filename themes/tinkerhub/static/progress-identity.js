(function () {
  var widget = window.netlifyIdentity;
  if (!widget) return;

  widget.init();

  var authBtn = document.getElementById("auth-btn");
  var createBtn = document.getElementById("create-btn");
  if (!authBtn) return;

  function updateButton(user) {
    var icon = authBtn.querySelector("[data-lucide]");
    if (user) {
      authBtn.title = (user.user_metadata && user.user_metadata.full_name) || user.email;
      authBtn.classList.add("logged-in");
      if (icon) icon.setAttribute("data-lucide", "log-out");
      if (createBtn) createBtn.style.display = "";
    } else {
      authBtn.title = "Login to track progress";
      authBtn.classList.remove("logged-in");
      if (icon) icon.setAttribute("data-lucide", "log-in");
      if (createBtn) createBtn.style.display = "none";
    }
    if (window.lucide) lucide.createIcons();
  }

  updateButton(widget.currentUser());

  widget.on("init", function (user) {
    updateButton(user);
  });
  widget.on("login", function (user) {
    updateButton(user);
    document.dispatchEvent(new CustomEvent("identity:login", { detail: user }));
  });
  widget.on("logout", function () {
    updateButton(null);
    document.dispatchEvent(new CustomEvent("identity:logout"));
  });

  authBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (widget.currentUser()) {
      widget.logout();
    } else {
      widget.open();
    }
  });
})();
