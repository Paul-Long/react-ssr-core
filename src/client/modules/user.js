const root = '/api/user/';
export default [
  {
    key: 'user.list',
    method: 'get',
    url: () => root
  },
  {
    key: 'user.login',
    method: 'post',
    url: () => `${root}login`
  },
  {
    key: 'user.check',
    method: 'get',
    url: () => `${root}check`
  }
];