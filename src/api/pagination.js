let verify = false;

function createFinalArray(middleArray) {
  const finalArray = [];

  middleArray.forEach((value) => finalArray.push(value.toString()));

  return finalArray;
}

function addEllipsis(quantity, middleArray, formatedPage) {
  if (middleArray[middleArray.length - 1] !== quantity
    && middleArray[middleArray.length - 1] !== formatedPage) {
    middleArray.push('...');   
  }

  if (middleArray[0] > 1
    && middleArray[0] !== formatedPage) {
    middleArray.unshift('...');   
  }
  return createFinalArray(middleArray);
}

function verifyA(value, page) {
  if (value >= (page - 2) && value <= (page + 2)) verify = true;
}

function verifyB(value, formatedPage) {
  if (value === formatedPage) verify = true;
}

function verifyC(value, page, initialArray) {
  if (initialArray.length - page < 2 && initialArray.length - value < 5) verify = true;
}

function verifyD(page, middleArray) {
  if (page < 3 && middleArray.length < 5) verify = true;
}

function createMiddleArray(page, initialArray, formatedPage, quantity) {
  const middleArray = [];
  
    initialArray.forEach((value) => {
      verifyA(value, page);
      verifyB(value, formatedPage);
      verifyC(value, page, initialArray);
      verifyD(page, middleArray);

      if (verify) middleArray.push(value);
      verify = false;
    });
  
  return addEllipsis(quantity, middleArray, formatedPage);
}

function createInitialArray(page, quantity, formatedPage) {
  const initialArray = [];

  for (let index = 1; index <= quantity; index += 1) {
    if (index !== page) {
      initialArray.push(index);
    } else {
      initialArray.push(formatedPage);
    }
  }
  return createMiddleArray(page, initialArray, formatedPage, quantity);
}

function pagination(page, quantity) {
  const formatedPage = `**${page}**`;
  
  const response = createInitialArray(page, quantity, formatedPage);

  return response;
}

module.exports = { pagination };
