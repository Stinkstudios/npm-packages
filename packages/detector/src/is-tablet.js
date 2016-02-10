import UA from './ua';
import IS_ANDROID from './is-android';
import IS_IOS from './is-ios';

const IS_TABLET = (IS_ANDROID || IS_IOS) && (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(UA.toLowerCase())); // eslint-disable-line

export default IS_TABLET;
