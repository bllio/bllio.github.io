/**
 * Appends `fragment` to the current URL.
 */
function writeFragmentToUrl(fragment: string) {
  history.pushState(null, '', fragment);
}

async function writeToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

function stripAllForwardSlash(text: string) {
  return text.replace(/\//g, '');
}

function stripAllHash(text: string) {
  return text.replace(/#/g, '');
}

function scrollBackToTop() {
  const root = document.documentElement;
  root.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export {
  writeFragmentToUrl,
  writeToClipboard,
  stripAllForwardSlash,
  stripAllHash,
  scrollBackToTop,
};
