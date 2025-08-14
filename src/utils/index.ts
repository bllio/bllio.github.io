/**
 * Appends `fragment` to the current URL.
 */
export function writeFragmentToUrl(fragment: string) {
  history.pushState(null, '', fragment);
}

export async function writeToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

export function stripAllForwardSlash(text: string) {
  return text.replace(/\//g, '');
}

export function stripAllHash(text: string) {
  return text.replace(/#/g, '');
}

export function scrollBackToTop() {
  const root = document.documentElement;
  root.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
