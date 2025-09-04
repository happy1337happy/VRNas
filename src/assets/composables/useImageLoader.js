const allImages = import.meta.glob('/src/assets/img/**/*.{jpg,png,jpeg,svg,webp}', { eager: true });

export function useImageLoader(fileName) {
  console.log('allImages keys:', Object.keys(allImages));
  console.log('fileName:', fileName);
  const key = Object.keys(allImages).find(k => k.endsWith(fileName));
  console.log('matched key:', key);
  return key ? allImages[key].default : '';
}

