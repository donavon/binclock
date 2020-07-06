// becasue you can't just spread strings in TS :(
export const spread = (value: string): string[] => [
  ...((value as unknown) as string[]),
];
