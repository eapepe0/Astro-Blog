import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
    // en los params vienen los parámetros de la URL
    // en el request vienen los datos de la petición

    // devuelve una respuesta
  return new Response(
    // convierte el objeto en una cadena JSON
    JSON.stringify({
      path: new URL(request.url).pathname,
    })
  );
};
