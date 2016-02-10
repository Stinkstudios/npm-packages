import UA from './ua';
import IS_IOS from './is-ios';

const IS_SAFARI_IOS = IS_IOS && /AppleWebKit/.test(UA);

export default IS_SAFARI_IOS;
