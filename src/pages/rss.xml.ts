import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request , site }) => {
    // en los params vienen los parámetros de la URL
    // en el request vienen los datos de la petición

    // extraemos los post de la coleccion blog
    const  blogPost  = await getCollection("blog");
    
    // devuelve una respuesta
    return rss({
        // le damos estilos a nuestro feed , en la carpeta public/styles/rss.xsl
        stylesheet: '/styles/rss.xsl',
        // `<title>` field in output xml
        title: 'Cristian’s Blog',
        // `<description>` field in output xml
        description: 'Un blog sobre Astro y otras cosas',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: site ?? '',
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports

        // mapeamos los blog de blogPost
        // extraemos data y slug de cada blog y devolvemos un objeto con los datos necesarios
        items: blogPost.map(({data , slug}) => ({
            title : data.title,
            pubDate : data.date,
            description : data.description,
            link : `/posts/${slug}`,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
      });
};
