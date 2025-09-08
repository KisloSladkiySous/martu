import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async ({ url, cookies }, next) => {
  if (url.pathname.startsWith("/admin")) {
    const cookie = cookies.get("admin_auth")?.value;
    if (!cookie) {
      // используем абсолютный URL
      return new Response(null, {
        status: 303,
        headers: { Location: new URL("/login", url).toString() },
      });
    }
  }

  return next();
};
