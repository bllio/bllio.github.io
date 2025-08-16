export function scrollBackToTop() {
  const root = document.documentElement;
  root.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
