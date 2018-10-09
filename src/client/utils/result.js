import Action from '@actions';

export default function result(res) {
  return new Result(res);
}

function Result(res) {
  const {status, content, message} = res || {};
  this._success = false;
  if (status === 200) {
    this._content = content;
    this._message = message || '';
    this._success = true;
  } else if (status === 400) {
    Action.push({pathname: '/login'});
  } else {
    this._success = false;
    this._content = null;
    this._message = message || '';
  }
}

Result.prototype.success = function (callback) {
  if (this._success) {
    callback(this._content, this._message);
  }
  return this;
};

Result.prototype.error = function (callback) {
  if (!this._success) {
    callback(this._content, this._message);
  }
  return this;
};