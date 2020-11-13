const objToArray = (objOfObjs) => {
  const array = [];
  Object.keys(objOfObjs).forEach((key) => {
    array.push(objOfObjs[key]);
  });
  return array;
};

export default { objToArray };
