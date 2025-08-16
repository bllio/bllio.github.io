import { writeFragmentToUrl } from '../utils/url';
import { writeToClipboard } from '../utils/writeToClipboard';

export function setupHeading() {
  async function handleClick(event: MouseEvent) {
    const element = event.target as HTMLHeadingElement;
    const section = element.parentElement!;

    writeFragmentToUrl(section.id);
    writeToClipboard(window.location.href);
    section.scrollIntoView();
  }

  for (const heading of document.querySelectorAll<HTMLHeadingElement>(
    '.section__head',
  )) {
    heading.addEventListener('click', handleClick);
  }
}
