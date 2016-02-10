import UA from './ua';
import IS_ANDROID from './is-android';

const ANDROID_VERSION = !IS_ANDROID ? -1 : parseFloat(UA.slice(UA.indexOf('Android') + 8));

export default ANDROID_VERSION;
