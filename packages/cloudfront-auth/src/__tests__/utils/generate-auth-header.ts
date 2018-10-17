const generateAuthHeader = (username: string, password: string) =>
  'Basic ' + new Buffer(username + ':' + password, 'utf8').toString('base64');

export default generateAuthHeader;
