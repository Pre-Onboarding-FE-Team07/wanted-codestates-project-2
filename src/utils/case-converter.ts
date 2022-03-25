export function toKebabCase(str: string) {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    (cap, ofs) => `${ofs ? '-' : ''}${cap.toLowerCase()}`,
  );
}

export function toSnakeCase(str: string) {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    (cap, ofs) => `${ofs ? '_' : ''}${cap.toLowerCase()}`,
  );
}
