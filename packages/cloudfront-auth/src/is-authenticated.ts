import { ICloudFrontRequest } from "./cloudfront-request";

export interface IIsAuthenticatedConfig {
  enabledDistributions?: string[];
  whitelistedIPs?: string[];
}

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

  return false;
};

export default isAuthenticated;
