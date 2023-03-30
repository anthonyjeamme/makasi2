export const classNameModule =
  (styles: Record<string, string>) =>
  (...list: TClassNameList) => ({
    className: transformList(list)
      .map((item) => styles[item])
      .join(" "),
  });

const transformList = (list: TClassNameList): string[] => {
  const particules: string[] = [];

  for (const item of list) {
    if (typeof item === "string") particules.push(item);

    for (const [key, value] of Object.entries(item)) {
      if (value === true && !particules.includes(key)) particules.push(key);
    }
  }

  return particules;
};

export type TClassNameList = TClassNameItem[];

type TClassNameItem = string | { [key: string]: boolean };
