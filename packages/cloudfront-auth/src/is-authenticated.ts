import { ICloudFrontRequest } from './cloudfront-request';

export interface ICredential {
  username: string;
  password: string;
}

export interface IIsAuthenticatedConfig {
  enabledDistributions?: string[];
  whitelistedIPs?: string[];
  validCredentails?: ICredential[];
}

const hasValidAuthorization = (
  request: ICloudFrontRequest,
  validCredentails: ICredential[]
) => {
  const header = request.Records[0].cf.request.headers.authorization;

  if (header) {
    const base64 = header[0].value.split(' ');

    const buf = new Buffer(base64[1], 'base64');
    const plainAuth = buf.toString();

    const [username, password] = plainAuth.split(':');

    return (
      validCredentails.filter(
        x => x.password === password && x.username === username
      ).length > 0
    );
  }

  return false;
};

const isAuthenticated = (
  request: ICloudFrontRequest,
  config?: IIsAuthenticatedConfig
) => {
  if (config && config.enabledDistributions) {
    const currentDistribution = request.Records[0].cf.config.distributionId;

    // return true if the current distribution is not enabled
    // useful to use one single lambda @ edge function for multiple
    // distribution (eg. dev, staging and production)

    if (!config.enabledDistributions.includes(currentDistribution)) {
      return true;
    }
  }

  if (config && config.whitelistedIPs) {
    const { clientIp } = request.Records[0].cf.request;

    // return true if the current clientIp is in the
    // whitelist

    if (config.whitelistedIPs.includes(clientIp)) {
      return true;
    }
  }

  if (config && config.validCredentails) {
    return hasValidAuthorization(request, config.validCredentails);
  }

  return false;
};

export default isAuthenticated;
