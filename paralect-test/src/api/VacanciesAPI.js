const url = 'https://startup-summer-2023-proxy.onrender.com';
import { createQueryStr } from '../utils';

const authParams = {
  password: 'paralect123',
  login: 'sergei.stralenia@gmail.com',
  client_id: '2356',
  client_secret:
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  hr: 0,
};

export class VacanciesAPI {
  static async getToken() {
    const queryString = createQueryStr(authParams);
    const data = await fetch(`${url}/2.0/oauth2/password/?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
      },
    });
    return data.json();
  }

  static async refreshToken(refreshToken) {
    const queryString = createQueryStr(authParams);
    const data = await fetch(
      `${url}/2.0/oauth2/refresh_token/?${queryString}&refresh_token=${refreshToken}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        },
      }
    );
    return data.json();
  }

  static async getVacancies(token, str) {
    const data = await fetch(`${url}/2.0/vacancies/?published=1&${str}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  }

  static async getOneVacancy(id, token) {
    const data = await fetch(`${url}/2.0/vacancies/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  }
  static async getIndustries(token) {
    const data = await fetch(`${url}/2.0/catalogues/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  }
}
