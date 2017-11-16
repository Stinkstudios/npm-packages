const generateAuthHeader = (username, password) =>
  "Basic " + new Buffer(username + ":" + password, "utf8").toString("base64");

export default generateAuthHeader;
