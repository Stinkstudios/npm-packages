export interface IGenerate401ResponseParams {
  realm: string;
}

const generate401Response = ({ realm }: IGenerate401ResponseParams) => ({
  body: '401 Authorization Required',
  headers: {
    'content-type': [
      {
        key: 'Content-Type',
        value: 'text/plain; charset=utf-8',
      },
    ],
    'www-authenticate': [
      {
        key: 'WWW-Authenticate',
        value: `Basic realm="${realm}"`,
      },
    ],
  },
  status: '401',
  statusDescription: 'Authorization Required',
});

export default generate401Response;
