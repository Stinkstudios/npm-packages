import UA from './ua';
import IS_IOS from './is-ios';

const IS_OSX = !IS_IOS && /Mac OS/.test(UA);

export default IS_OSX;
