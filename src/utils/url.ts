export function writeFragmentToUrl(fragment: string) {
  history.pushState(null, '', fragment);
}

export function stripAllForwardSlash(text: string) {
  return text.replace(/\//g, '');
}

export function stripAllHash(text: string) {
  return text.replace(/#/g, '');
}
