import UA from './ua';
import IS_ANDROID_BROWSER from './is-android-browser';
import IS_CHROME from './is-chrome';

const IS_SAFARI = !IS_ANDROID_BROWSER && !IS_CHROME && /Safari/.test(UA);

export default IS_SAFARI;
