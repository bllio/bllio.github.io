/**
 * Appends `fragment` to the current URL.
 */
const writeFragmentToUrl = (fragment: string) => {
  history.pushState(null, '', fragment);
};

const writeToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const stripAllForwardSlash = (text: string) => {
  return text.replace(/\//g, '');
};

const stripAllHash = (text: string) => {
  return text.replace(/#/g, '');
};

export {
  writeFragmentToUrl,
  writeToClipboard,
  stripAllForwardSlash,
  stripAllHash,
};
