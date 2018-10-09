export default function () {
  return [
    {dataIndex: '_id', title: 'ID', width: 200},
    {dataIndex: 'userName', title: '用户名', width: 200},
    {dataIndex: 'phone', title: '电话', width: 200},
    {
      dataIndex: 'updateTime', title: '更新时间', width: 200,
      render: text => new Date(text).format('YYYY-MM-DD HH:mm:ss')
    },
  ];
}