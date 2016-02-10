import UA from './ua';
import IS_WINDOWS_PHONE from './is-windows-phone';

const IS_WINDOWS = !IS_WINDOWS_PHONE && /Windows/.test(UA);

export default IS_WINDOWS;
