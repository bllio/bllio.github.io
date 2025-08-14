import { stripAllForwardSlash } from '../utils';

function setupPage() {
  /**
   * Helper method to get the fragment from the current URL.
   */
  function getFragmentFromCurrentUrl() {
    // On this site, clicking on a heading appends a fragment to the current
    // URL without a `#` sign for prettier URLs, so here we only need to
    // remove the leading forward slash from the pathname.
    return stripAllForwardSlash(window.location.pathname);
  }

  function handleLoad() {
    // We want the page to scroll down towards the section whose ID
    // corresponds to the fragment in the current URL.
    const urlFragment = getFragmentFromCurrentUrl();
    if (urlFragment !== '') {
      const targetSectionId = `#${urlFragment}`;
      const targetSection =
        document.querySelector<HTMLElement>(targetSectionId)!;
      targetSection.scrollIntoView();
    }
  }

  window.addEventListener('load', handleLoad);
}

export { setupPage };
