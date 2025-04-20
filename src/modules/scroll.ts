import { scrollBackToTop } from '../utils';

const setupScroll = () => {
  // Scroll back to top button.
  const scrollButton =
    document.querySelector<HTMLButtonElement>('#scroll-button')!;

  const toggleDisplay = (
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver,
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        scrollButton.classList.remove('scroll-button--hidden');
      } else {
        scrollButton.classList.add('scroll-button--hidden');
      }
    });
  };

  const handleClick = () => {
    scrollBackToTop();
  };

  const createScrollButtonObserver = () => {
    let observer;
    observer = new IntersectionObserver(toggleDisplay);
    observer.observe(scrollButton);
  };

  scrollButton.addEventListener('click', handleClick);
  createScrollButtonObserver();
};

export { setupScroll };
