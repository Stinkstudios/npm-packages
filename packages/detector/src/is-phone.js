import UA from './ua';
import IS_ANDROID from './is-android';
import IS_IOS from './is-ios';

const IS_PHONE = (IS_ANDROID || IS_IOS) && (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(UA.toLowerCase())); // eslint-disable-line max-len

export default IS_PHONE;
