const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
const index = char => input.indexOf(char);
const translation = char => (index(char) > -1 ? output[index(char)] : char);

function rot13(message) {
  return message
    .split("")
    .map(translation)
    .join("");
}
