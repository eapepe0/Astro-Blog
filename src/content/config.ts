import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({image}) => 
        z.object({
            title: z.string(),
            date: z.date(),
            description : z.string(),
            image :  image(),
            // relacion
            author : z.string(),
            //relacion
            tags : z.array(z.string()),
        })
});


export const collections = {
    blog : blogCollection,
}

// la carpeta de content debera ser llamada blog o lo que se ponga en la linea 20