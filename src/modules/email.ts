import { writeToClipboard } from '../utils';

export function setupEmail() {
  const obfuscatedEmail = document.querySelector<HTMLParagraphElement>(
    '#contact-email-text',
  )!.innerText;

  const buttonText =
    document.querySelector<HTMLSpanElement>('#copy-button-text')!;

  const iconBefore = document.querySelector<HTMLSpanElement>(
    '#copy-button-icon-before',
  )!;

  /**
   * Parses an obfuscated email address into a legitimate one.
   *
   * @param email An obfuscated email address created through address munging.
   *
   * @see https://en.wikipedia.org/wiki/Address_munging.
   */
  function parseEmailAddress(email: string) {
    // We could have used a lookup table and regex as a more elegant approach
    // but in this case, the email address will most likely never have to have
    // a bigger number of obfuscating strings so sticking with this code
    // should be fine.
    email = email.replace('at', '@');
    email = email.replace('dot', '.');
    email = email.replace(/\s/g, '');

    return email;
  }

  /**
   * Helper that builds the icon used when copying the email is successful.
   */
  function buildSuccessIcon() {
    // We create the element manually instead of using a Lit template because
    // here it is trivial to do so; we only have one instance of the element
    // and its properties never change.
    const icon = document.createElement('span');

    icon.classList.add(
      'material-symbols-outlined',
      'copy-button__icon',
      'copy-button__icon--static',
    );
    icon.setAttribute('id', 'copy-button-icon-after');
    icon.innerText = 'check';

    return icon;
  }

  const iconAfter = buildSuccessIcon();
  const actualEmail = parseEmailAddress(obfuscatedEmail);

  async function handleClick() {
    try {
      writeToClipboard(actualEmail);
      buttonText.innerText = 'Copied';
      iconBefore.replaceWith(iconAfter);

      setTimeout(() => {
        buttonText.innerText = 'Copy';
        iconAfter.replaceWith(iconBefore);
      }, 5000);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  const copyButton = document.querySelector<HTMLButtonElement>('#copy-button')!;
  copyButton.addEventListener('click', handleClick);
}
