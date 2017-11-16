export interface IConfig {
  distributionId: string;
  requestId: string;
}

export interface IHeader {
  key: string;
  value: string;
}

export interface IHeaders {
  [x: string]: IHeader[];
}

export interface IRequest {
  clientIp: string;
  method: string;
  uri: string;
  querystring: string;
  headers: IHeaders;
}

export interface ICf {
  config: IConfig;
  request: IRequest;
}

export interface IRecord {
  cf: ICf;
}

export interface ICloudFrontRequest {
  Records: IRecord[];
}
