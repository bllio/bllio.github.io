import { writeFragmentToUrl, writeToClipboard } from '../utils';

const setupHeading = () => {
  const handleClick = async (event: MouseEvent) => {
    const element = event.target as HTMLHeadingElement;
    const section = element.parentElement!;

    writeFragmentToUrl(section.id);
    writeToClipboard(window.location.href);
    section.scrollIntoView();
  };

  for (const heading of document.querySelectorAll<HTMLHeadingElement>(
    '.section__head',
  )) {
    heading.addEventListener('click', handleClick);
  }
};

export { setupHeading };
