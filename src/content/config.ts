import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({image}) => 
        z.object({
            title: z.string(),
            date: z.date(),
            description : z.string(),
            image :  image(),
            // relacionamos el autor con la coleccion authorCollection
            author :  reference("author"),
            //relacion
            tags : z.array(z.string()),

            // Boolean

            // creamos una propiedad isDraft , para no cambiar cada archivo *.md 
            // ponemos que por defecto sea false
            isDraft: z.boolean().default(false), 
        })
});

 
 const authorCollection = defineCollection({
    type: "data",
    schema: ({image}) =>
        z.object({
            name: z.string(),
            avatar: image(),
        }),
});

export const collections = {
    blog : blogCollection,
    author : authorCollection, 
}

// la carpeta de content debera ser llamada blog o lo que se ponga en la linea 20