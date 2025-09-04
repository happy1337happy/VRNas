const allImages = import.meta.glob('@/assets/img/**/*.{jpg,png,jpeg,svg,webp}', { eager: true });

export function useImageLoader(relativePath) {
  const fullPath = `/src/assets/img/${relativePath}`;
  const cleanedPath = fullPath.replace(/^@/, '/src');
  return allImages[cleanedPath]?.default || '';
}

