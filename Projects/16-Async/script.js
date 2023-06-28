//Correct
// const promise = fetch('http://api.nbp.pl/api/cenyzlota/last/10?format=json')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Incorrect
// const promise2 = promise.then((response) => response.json());
// promise2.then((data) => console.log(data));
// promise.catch((error) => console.log('Error: ', error));

// const promise = new Promise((resolve, reject) => {
//   console.log('promise is running');

//   setTimeout(() => {
//     const data = { Name: 'John', Age: 30 };
//     resolve('promise is resolved');
//     reject('promise is rejected');
//   }, 1000);
// });

// promise
//   .then((jsonData) => {
//     console.log('Data: ', jsonData);
//   })
//   .catch((error) => {
//     console.log('Error: ', error);
//   });

// console.log('Website content');

// const promiseFirst = new Promise((resolve, reject) => {
//   const data = { name: 'John', age: 30 };
//   setTimeout(() => {
//     resolve(data);
//   }, 1000);
// });

// const promiseSecond = new Promise((resolve, reject) => {
//   const data = { name: 'John', age: 30 };
//   setTimeout(() => {
//     reject(console.log('error in reject'));
//   }, 2500);
// });

// Promise.all([promiseFirst, promiseSecond])
//   .then((data) => {
//     console.log('1');
//   })
//   .catch((data) => {
//     console.log('error in catch');
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// promiseFirst.then((data) => {
//   console.log(data.name);
// });
// promiseFirst.then((data) => {
//   console.log(data.age);
// });
// promiseFirst.catch((error) => {
//   console.log('error');
// });
// promiseFirst.finally(() => {
//   console.log('end message');
// });

// function lesson(lessonNumber, callback) {
//   console.log(`I am learning lesson number: ${lessonNumber}`);
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// //callback Hell
// lesson(1, () => {
//   lesson(2, () => {
//     lesson(3, () => {
//       lesson(4, () => {});
//     });
//   });
// });

// function lesson2(lessonNumber) {
//   return new Promise((resolve, reject) => {
//     console.log(`I am learning lesson number: ${lessonNumber}`);
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// lesson2(1)
//   .then(() => lesson2(2))
//   .then(() => lesson2(3))
//   .then(() => lesson2(4))
//   .catch(() => {
//     console.log('no lessons found');
//   })
//   .finally(() => {
//     console.log('all lessons finished');
//   });

// function fetchData1(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('fetching data1');
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     }, 1000);
//   });
// }

// function fetchData2(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('fetching data2');
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     }, 3000);
//   });
// }

// Promise.all([fetchData1('http://api.nbp.pl/api/cenyzlota/last/3?format=json'), fetchData2('http://api.nbp.pl/api/cenyzlota/last/5?format=json')])
//   .then((data) => console.log(data))
//   .catch((error) => reject(error))
//   .finally(() => console.log('request completed'));

// function lesson(lessonNumber) {
//   console.log(`I am learning lesson number: ${lessonNumber}`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       reject();
//     }, 1000);
//   });
// }

// async function learnLesson() {
//   await lesson(1);
//   await lesson(2);
//   await lesson(3);
//   await lesson(4);
//   await lesson(5);
//   console.log('End of learning');
// }

// learnLesson();

// async function fetchData() {
//   try {
//     const response = new fetch('http://api.nbp.pl/api/cenyzlota/last/3?format=json');
//     const option = await response.json();
//     console.log(option);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetch('http://api.nbp.pl/api/cenyzlota/last/3?format=json')
//   .then((response) => response.json())
//   .then((option) => console.log(option))
//   .catch((err) => console.log(err));

// async function Sum(a, b) {
//   return a + b;
// }

// Sum(3, 6).then((result) => {
//   console.log(result);
// });

const waitForMe = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Wait time: ${time}`));
    }, time);
  });
};

(async () => {
  try {
    const result = waitForMe(1000);
    console.log(result);
  } catch {
    console.log('error');
  }
})();
