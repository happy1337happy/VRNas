const allImages = import.meta.glob('/src/assets/img/**/*.{jpg,png,jpeg,svg,webp}', { eager: true });

export function useImageLoader(fileName) {
  const key = Object.keys(allImages).find(k => k.includes(fileName));
  return key ? allImages[key].default : '';
}

