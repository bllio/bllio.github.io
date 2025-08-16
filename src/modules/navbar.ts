import { scrollBackToTop } from '../utils/scrollBackToTop';
import {
  stripAllForwardSlash,
  stripAllHash,
  writeFragmentToUrl,
} from '../utils/url';

export function setupNavbar() {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navbar__link');

  function handleClick(event: MouseEvent) {
    event.preventDefault();

    const element = event.target as HTMLAnchorElement;
    const fragment = element.getAttribute('href')!;

    if (fragment === '/') {
      writeFragmentToUrl('/');
      scrollBackToTop();
      return;
    }

    const pathname = stripAllForwardSlash(stripAllHash(fragment));
    const section = document.getElementById(pathname);
    if (section) {
      writeFragmentToUrl(pathname);
      section.scrollIntoView();
    }
  }

  links.forEach((link) => {
    link.addEventListener('click', handleClick);
  });
}
