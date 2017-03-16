export function validateClassNames(props, propName, componentName = 'ANONYMOUS') {
	if (props[propName]) {
		const names = props[propName].split(' ');
		const re = new RegExp(/[A-Za-z]-|__/);
		const error = `\`${propName}\` on ${componentName}. Values must be either` +
		' namespaced Block names (https://github.com/stinkstudios/guidelines/tree/master/css#namespaces)' +
		' or Element names (http://getbem.com/naming/). Other Component names NOT allowed.';
		if (typeof names === 'object') {
			for (const name of names) { // eslint-disable-line no-restricted-syntax
				// console.debug('>>>>>>', name, re.test(name));
				if (!re.test(name)) throw new Error(error);
			}
		}
	}
	return null;
}
