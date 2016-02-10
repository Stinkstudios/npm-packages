import UA from './ua';

const IS_IPAD = !!UA.match(/iPad/i);

export default IS_IPAD;
