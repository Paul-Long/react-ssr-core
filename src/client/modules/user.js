const root = '/api/user/';
export default [
  {
    key: 'user.login',
    method: 'post',
    url: () => `${root}login`
  },
  {
    key: 'user.permission',
    method: 'get',
    url: () => `${root}permission`
  }
];