const importImages = import.meta.glob("../../content/blog/images/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "default",
  });
  
  export function resolveImage(imagePath: string): string {
    const image = importImages[`../../content/blog/images/${imagePath}`];
    
  
    if (!image) {
      throw new Error(`Image not found: ${imagePath}`);
    }
  
    return image as string; // Cast explícito a string
  }