import operate from './operate';

const isNumber = (item) => !!item.match(/[0-9]+/);

const calculate = (obj, btnName) => {
  // const [obj ,btnName] = this.state;
  if (btnName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (isNumber(btnName)) {
    if (btnName === '0' && obj.next === '0') return {};

    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + btnName };
      }
      return { ...obj, next: btnName };
    }

    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + btnName,
        total: null,
      };
    }
    return {
      next: btnName,
      total: null,
    };
  }

  if (btnName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (btnName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (btnName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: btnName };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: btnName };
    }

    if (!obj.total) {
      return { total: 0, operation: btnName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: btnName,
    };
  }

  if (!obj.next) {
    return { operation: btnName };
  }
  return {
    total: obj.next,
    next: null,
    operation: btnName,
  };
};

export default calculate;
