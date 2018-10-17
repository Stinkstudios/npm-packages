import generate401 from './generate-401-response';
import isAuthenticated, { IIsAuthenticatedConfig } from './is-authenticated';

import { ICloudFrontRequest } from './cloudfront-request';

const processRequest = (
  configuration: IIsAuthenticatedConfig,
  event: ICloudFrontRequest,
  callback: (err: Error | null, response: any) => void
) => {
  const authenticated = isAuthenticated(event, configuration);

  if (authenticated) {
    return callback(null, event.Records[0].cf.request);
  }

  return callback(
    null,
    generate401({
      realm: 'Authentication required',
    })
  );
};

export default processRequest;
