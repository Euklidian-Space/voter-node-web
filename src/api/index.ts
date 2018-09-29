import config from '../config';
const API_URL: string = config().NODE_API_URL;

function headers(): Headers {
  const token: string = JSON.parse(localStorage.item('token'));
  const authHeader: Headers = new Headers();
  authHeader.append("Accept", "application/json");
  authHeader.append("Content-Type", "application/json");
  authHeader.append("x-access-token", token);

  return authHeader;
}

function parseResponse(response: Response): Promise<JSON> {
  return response.json().then((json: any) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  });
}

function queryString(params: object): string {
  const query: string = Object.keys(params)
                              .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
                              .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

function get(url: string, params: object = {}): Promise<JSON> {
  return fetch(`${API_URL}${url}${queryString(params)}`, {
    method: 'GET',
    headers: headers()
  })
  .then(parseResponse);
}

function post(url: string, data: JSON): Promise<JSON> {
  const body: string = JSON.stringify(data);

  return fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: headers(),
    body: body
  })
  .then(parseResponse);
}

export default {
  get, 
  post
};
