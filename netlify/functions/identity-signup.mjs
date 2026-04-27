export default async (req) => {
  const body = await req.json();
  return new Response(JSON.stringify({
    app_metadata: {
      roles: ["website-user"]
    }
  }), {
    headers: { "Content-Type": "application/json" }
  });
};
