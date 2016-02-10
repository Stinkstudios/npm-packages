import UA from './ua';

const IS_IPHONE = !!UA.match(/iPhone/i);

export default IS_IPHONE;
