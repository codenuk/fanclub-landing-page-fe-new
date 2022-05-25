export const isIncludeUpperCase = (value?: string) =>
  value ? /.*[A-Z].*/.test(value) : false;
export const isIncludeLowerCase = (value?: string) =>
  value ? /.*[a-z].*/.test(value) : false;
export const isIncludeNumber = (value?: string) =>
  value ? /.*[0-9].*/.test(value) : false;
export const isIncludeSpecialCharacter = (value?: string) =>
  value ? /.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~].*/.test(value) : false;
export const isIncludeSpace = (value?: string) =>
  value ? /.*\s.*/.test(value) : false;
