export default function () {
  return [
    {
      dataIndex: 'url', title: '预览', width: 60, maxWidth: 60,
      render: (url) => (<img src={`${url}?imageView2/0/w/48`} />)
    },
    {title: '文件名', dataIndex: 'name', width: 200},
    {title: '文件夹', dataIndex: 'dir', width: 200},
  ];
}