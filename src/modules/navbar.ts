import {
  scrollBackToTop,
  stripAllForwardSlash,
  stripAllHash,
  writeFragmentToUrl,
} from '../utils';

const setupNavbar = () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navbar__link');

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const element = event.target as HTMLAnchorElement;
    const sections = document.querySelectorAll<HTMLElement>('.section');
    const fragment = element.getAttribute('href');

    if (!fragment) {
      return;
    }

    if (fragment === '/') {
      writeFragmentToUrl('/');
      scrollBackToTop();
    }

    for (const section of sections) {
      const pathname = stripAllForwardSlash(stripAllHash(fragment));
      if (section.getAttribute('id') !== pathname) {
        continue;
      }
      writeFragmentToUrl(pathname);
      section.scrollIntoView();
    }
  };

  links.forEach((link) => {
    link.addEventListener('click', handleClick);
  });
};

export { setupNavbar };
