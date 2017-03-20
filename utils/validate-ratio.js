const validateRatio = (props, propName, componentName = "ANONYMOUS") => {
  if (props[propName]) {
    const ratio = props[propName];
    if (typeof ratio !== "string")
      throw new Error(`Ratio must be a string, got ${typeof ratio}`);

    const rs = ratio.split(":");

    if (rs.length < 2)
      throw new Error(
        'Ratio prop must be supplied in the format "W:H", where W and H are a number'
      );

    if (isNaN(parseInt(rs[0], 10)) || isNaN(parseInt(rs[1], 10)))
      throw new Error(
        'Ratio prop must be supplied in the format "W:H", where W and H are a number'
      );
  }

  return null;
};

export { validateRatio };
export default validateRatio;
