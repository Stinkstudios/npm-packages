import UA from './ua';
import IS_IOS from './is-ios';

const IS_CHROME_IOS = IS_IOS && /CriOS/.test(UA);

export default IS_CHROME_IOS;
