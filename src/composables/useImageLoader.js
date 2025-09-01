const allImages = import.meta.glob('@/assets/img/**/*.{jpg,png,jpeg,svg,webp}', { eager: true })

export function useImageLoader(relativePath) {
  const cleanedPath = relativePath.replace(/^@/, '/src')
  return allImages[cleanedPath]?.default || ''
}
