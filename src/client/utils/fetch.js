import fetchApi from 'isomorphic-fetch';
import init from '@utils/instance';

const baseHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'YWRtaW4lMjBsb25nMTIzNA==',
};

const __fetch = init();

let root = '';
if (process.env.RENDER_SERVER) {
  root = 'http://api.houym.com';
}

class Fetch {
  constructor() {
    const instance = __fetch();
    if (instance) return instance;
    this._headers = {...baseHeaders};
    __fetch(this);
  }

  headers = (headers = {}) => {
    __fetch()._headers = Object.assign({}, __fetch()._headers, headers);
    return this;
  };

  fetch = (uri, options) => {
    try {
      let finalOptions = Object.assign({credentials: 'include'}, options);
      if (__fetch()._headers) {
        finalOptions = Object.assign({}, finalOptions, {headers: __fetch()._headers});
      }
      return fetchApi(root + uri, finalOptions)
        .then(res => (typeof res === 'object') ? res.json() : res)
        .then(json => json)
        .catch(error => {
          throw error;
        });
    } catch (err) {
      console.error(`fetch ${options.method} error : `, err);
    }
  };

  static get = (uri) => {
    if (!__fetch()._headers) {
      __fetch()._headers = {...baseHeaders};
    }
    return __fetch().fetch(uri, {
      method: 'GET',
    });
  };

  static post = (uri, body = {}) => {
    if (!__fetch()._headers) {
      __fetch()._headers = {...baseHeaders};
    }
    return __fetch().fetch(uri, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  };

  static delete = (uri, body = {}) => {
    if (!__fetch()._headers) {
      __fetch()._headers = {...baseHeaders};
    }
    return __fetch().fetch(uri, {
      method: 'DELETE',
      body: JSON.stringify(body),
    });
  };


  static put = (uri, body = {}) => {
    if (!__fetch()._headers) {
      __fetch()._headers = {...baseHeaders};
    }
    return __fetch().fetch(uri, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  };

  static file = (uri, formData) => {
    __fetch()._headers = null;
    return __fetch().fetch(uri, {
      method: 'POST',
      body: formData,
      processData: false,
      contentType: false,
    });
  };
}

new Fetch();
export default Fetch;
