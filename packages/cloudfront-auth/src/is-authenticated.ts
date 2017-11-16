import { ICloudFrontRequest } from "./cloudfront-request";

export interface IIsAuthenticatedConfig {
  enabledDistributions?: string[];
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

  return false;
};

export default isAuthenticated;
