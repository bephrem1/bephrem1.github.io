export const isEmpty = (value: any) => {
  return value === null || value === undefined || value === '' || isEmptyObject(value);
};

export const isEmptyObject = (obj: any) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};
