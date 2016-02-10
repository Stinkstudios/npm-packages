import UA from './ua';

const IS_IOS = !!UA.match(/iP[ao]d|iPhone/i);

export default IS_IOS;
