/**
 * Remove properties from object and return the new object.
 *
 * Does not mutate the original object.
 *
 * @param obj any object
 * @param keys keys for properties to remove
 * @returns object without given keys
 */
const remove = (obj: any, ...keys: string[]) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  ) as any;

export default remove;
