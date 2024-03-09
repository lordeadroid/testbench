const arrowFunction = (oldFunctionMethod) => {
  this.one = 1;
  console.log(this);
};

const oldFunctionMethod = function () {
  oldFunctionMethod();
};

arrowFunction(oldFunctionMethod);
