import { getStore } from "@netlify/blobs";

function getUserFromToken(req) {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) return null;
  const token = auth.split(" ")[1];
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.sub ? payload : null;
  } catch (e) {
    return null;
  }
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const user = getUserFromToken(req);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await req.json();
  const { pageSlug, checkedIds } = body;
  if (!pageSlug || !Array.isArray(checkedIds)) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const store = getStore("progress");
  const key = `${user.sub}/${pageSlug}`;
  await store.set(key, JSON.stringify({ checkedIds }));

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
