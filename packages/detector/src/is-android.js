import UA from './ua';

const IS_ANDROID = !!UA.match(/Android/i);

export default IS_ANDROID;
