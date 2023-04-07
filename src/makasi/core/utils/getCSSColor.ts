export const getCSSProperty = (value: string) =>
  !value
    ? undefined
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
