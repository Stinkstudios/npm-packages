import UA from './ua';

const IS_IPOD = !!UA.match(/iPod/i);

export default IS_IPOD;
