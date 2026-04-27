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
  const user = getUserFromToken(req);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const url = new URL(req.url);
  const pageSlug = url.searchParams.get("page");
  if (!pageSlug) {
    return new Response(JSON.stringify({ error: "Missing page parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const store = getStore("progress");
  const key = `${user.sub}/${pageSlug}`;
  const data = await store.get(key, { type: "json" });

  return new Response(JSON.stringify(data || { checkedIds: [] }), {
    headers: { "Content-Type": "application/json" },
  });
};
