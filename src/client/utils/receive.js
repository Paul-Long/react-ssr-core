export default function ({ key, nextProps, loading, success, error }) {
  const _this = this;

  function callReceive(k) {
    const prop = _this.props[k];
    const nProp = nextProps[k];
    if (prop !== nProp) {
      const { result, payload, page } = nProp || {};
      if (nProp.loading) {
        if (isFunction(loading)) {
          loading(payload);
        }
      } else {
        if (nProp.success) {
          if (isFunction(success)) {
            success(result, payload);
          }
        } else if (nProp.error) {
          if (isFunction(error)) {
            error(nProp.error, result, payload);
          }
        }
      }
    }
  }

  if (key instanceof Array) {
    for (const k of key) {
      callReceive(k);
    }
    return;
  } else if (typeof key === 'string') {
    callReceive(key);
    return;
  }
  throw Error(`props key should be Array or string , but [${typeof key}]`);
}

function isFunction(func) {
  return typeof func === 'function';
}
