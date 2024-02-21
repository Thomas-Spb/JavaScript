'use stcrict';

{
  const ArraySum = myArray => {
    const randomNumber = Math.round(Math.random() * 10);
    myArray.push(randomNumber);
    console.log(myArray);
    const sumArray = myArray.reduce((sum, item) => {
      return sum + item;
    });
    // console.log('sumArray: ', sumArray);

    if (sumArray < 50) {
      ArraySum(myArray);
    } else {
      return myArray;
    }
  };
  let MyArray = [];

  console.log(ArraySum(MyArray));
}
