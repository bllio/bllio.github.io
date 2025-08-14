import { scrollBackToTop } from '../utils';

export function setupScroll() {
  // Scroll back to top button.
  const scrollButton =
    document.querySelector<HTMLButtonElement>('#scroll-button')!;

  function toggleDisplay(
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver,
  ) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        scrollButton.classList.remove('scroll-button--hidden');
      } else {
        scrollButton.classList.add('scroll-button--hidden');
      }
    });
  }

  function handleClick() {
    scrollBackToTop();
  }

  function createScrollButtonObserver() {
    let observer;
    observer = new IntersectionObserver(toggleDisplay);
    observer.observe(scrollButton);
  }

  scrollButton.addEventListener('click', handleClick);
  createScrollButtonObserver();
}
