export function validateClassNames(
  props,
  propName,
  componentName = 'ANONYMOUS'
) {
  if (props[propName]) {
    const classNames = props[propName];
    if (Object.prototype.toString.call(classNames) !== '[object Array]') {
      throw new Error(
        `\`classNames\` must be an array (of strings); current type: ${typeof classNames}`
      );
    }

    const re = new RegExp(/[A-Za-z]-|__/);
    const error =
      `\`${propName}\` on ${componentName}. Values must be either` +
      ' namespaced Block names (https://github.com/stinkstudios/guidelines/tree/master/css#namespaces)' +
      ' or Element names (http://getbem.com/naming/). Other Component names are NOT allowed.';
    classNames.map(name => {
      if (!re.test(name)) throw new Error(error);
      return null;
    });
  }
  return null;
}
