const allImages = import.meta.glob('/src/assets/img/**/*.{jpg,png,jpeg,svg,webp}', { eager: true });

export function useImageLoader(pathOrFile) {
  if (!pathOrFile) return '';

  let cleaned = pathOrFile.replace(/^@/, '/src');

  if (!cleaned.startsWith('/src/assets/img/')) {
    cleaned = '/src/assets/img/' + cleaned.replace(/^\/+/, '');
  }

  if (allImages[cleaned]) {
    return allImages[cleaned].default;
  }
  const filename = cleaned.split('/').pop();
  const foundKey = Object.keys(allImages).find(k => k.endsWith('/' + filename) || k.endsWith(filename));

  return foundKey ? allImages[foundKey].default : '';
}


