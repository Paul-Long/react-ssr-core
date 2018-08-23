import { message } from 'antd';

export default (condition, format, level = 'info') => {
  if (!condition || condition === '') {
    message[level](format);
    return true;
  }
  return false;
}