const myEach = function (collection, callback) {
  if (Array.isArray(collection)) {
    for (let element of collection) {
      callback(element);
    }
    return collection;
  } else {
    for (let value of Object.values(collection)) {
      callback(value);
    }
    return collection;
  }
};

const myMap = function (collection, callback) {
  const newCollection = [];
  if (Array.isArray(collection)) {
    for (let element of collection) {
      newCollection.push(callback(element));
    }
    return newCollection;
  } else {
    for (let value of Object.values(collection)) {
      newCollection.push(callback(value));
    }
    return newCollection;
  }
};

const myReduce = function (collection, callback, acc) {
  let startIndex = 0;
  if (Array.isArray(collection)) {
    if (acc === undefined) {
      acc = collection[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    const values = Object.values(collection);
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
      const value = values[i];
      acc = callback(acc, value, values);
    }
  }
  return acc;
};

const myFind = function (collection, predicate) {
  if (Array.isArray(collection)) {
    for (let element of collection) {
      if (predicate(element)) {
        return element;
      }
    }
    return undefined;
  } else {
    for (let value of Object.values(collection)) {
      if (predicate(value)) {
        return value;
      }
    }
    return undefined;
  }
};

const myFilter = function (collection, predicate) {
  const newCollection = [];
  if (Array.isArray(collection)) {
    for (let element of collection) {
      if (predicate(element)) {
        newCollection.push(element);
      }
    }
    return newCollection;
  } else {
    for (let value of Object.values(collection)) {
      if (predicate(value)) {
        newCollection.push(value);
      }
    }
    return newCollection;
  }
};

const mySize = function (collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.values(collection).length;
  }
};

const myFirst = function (collection, n) {
  if (n === undefined) {
    return collection[0];
  } else {
    return collection.slice(0, n);
  }
};

const myLast = function (collection, n) {
  if (n === undefined) {
    return collection[collection.length - 1];
  } else {
    return collection.slice(-n);
  }
};

const mySortBy = function (array, callback) {
  const newArray = [...array].sort((a, b) => {
    const callbackA = callback(a);
    const callbackB = callback(b);
    if (callbackA < callbackB) {
      return -1;
    } else if (callbackA > callbackB) {
      return 1;
    } else {
      return 0;
    }
  });
  return newArray;
};
const testArray = ["value1", ["value2", "value3"], ["value4", "value5"]];
const myFlatten = function (array, boolean = false, newArr = []) {
  for (let value of array) {
    if (Array.isArray(value)) {
      if (boolean) {
        newArr.push(...value);
      } else {
        myFlatten(value, false, newArr);
      }
    } else {
      newArr.push(value);
    }
  }
  return newArr;
};

const myKeys = function (obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
};

const myValues = function (obj) {
  const values = [];
  for (let key in obj) {
    const value = obj[key];
    values.push(value);
  }
  return values;
};
