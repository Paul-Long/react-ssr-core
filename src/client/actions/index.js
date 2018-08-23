import init from '@utils/instance';

const __action = init();

class Action {
  _dispatch;

  constructor({ dispatch }) {
    const instance = __action();
    if (instance) return instance;
    this._dispatch = dispatch;
    __action(this);
  }

  static emit = (type, payload) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      __action()._dispatch({ type, payload });
    });
  };

  static success = (type, payload) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      __action()._dispatch({ type: `${type}_SUCCESS`, ...payload });
    });
  };

  static clean = (type) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      __action()._dispatch({ type: `${type}_FAIL`, payload: { result: null } });
    });
  };
}

export default Action;
