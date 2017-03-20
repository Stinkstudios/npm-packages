const validateRatio = (props, propName, componentName = "ANONYMOUS") => {
  if (props[propName]) {
    const ratio = props[propName];
    if (typeof ratio !== "string")
      throw new Error(`Ratio must be a string, got ${typeof ratio}`);
  }

  return null;
};

export { validateRatio };
export default validateRatio;
