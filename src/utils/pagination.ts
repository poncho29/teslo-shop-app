export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
  // if total page is 7 or less
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Si la página actual esta entre las primeras 3 páginas
  // mostrar las primeras 3 páginas, los puntos suspensivos y las ultimas 2 páginas
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // Si la página actual esta entre las ultimas 3 páginas
  // mostrar las primeras 2 páginas, los puntos suspensivos y las ultimas 3 páginas
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // Si la página actual no esta entre las primeras 3 páginas ni las ultimas 3 páginas
  // mostrar las primera páginas, los puntos suspensivos, la página actual, los puntos suspensivos y las ultima páginas
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages
  ];
}