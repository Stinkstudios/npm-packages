import { ICloudFrontRequest, IHeaders } from '../../cloudfront-request';

const template: ICloudFrontRequest = {
  Records: [
    {
      cf: {
        config: {
          distributionId: 'EDFDVBD6EXAMPLE',
          requestId: 'MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE==',
        },
        request: {
          clientIp: '2001:0db8:85a3:0:0:8a2e:0370:7334',
          headers: {
            host: [
              {
                key: 'Host',
                value: 'd111111abcdef8.cloudfront.net',
              },
            ],
            'user-agent': [
              {
                key: 'User-Agent',
                value: 'curl/7.51.0',
              },
            ],
          },
          method: 'GET',
          querystring: 'size=large',
          uri: '/picture.jpg',
        },
      },
    },
  ],
};

interface IGenerateRequestParams {
  distributionId?: string;
  clientIp?: string;
  uri?: string;
  headers?: IHeaders;
}

const generateRequest = ({
  distributionId,
  clientIp,
  uri,
  headers,
}: IGenerateRequestParams = {}) => {
  const request = {
    ...template,
  };

  if (distributionId) {
    request.Records[0].cf.config.distributionId = distributionId;
  }

  if (clientIp) {
    request.Records[0].cf.request.clientIp = clientIp;
  }

  if (uri) {
    request.Records[0].cf.request.uri = uri;
  }

  if (headers) {
    request.Records[0].cf.request.headers = {
      ...request.Records[0].cf.request.headers,
      ...headers,
    };
  }

  return request;
};

export default generateRequest;
