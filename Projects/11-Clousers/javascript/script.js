//! Click count
const add = (start = 0) => {
  let number = start;
  document.body.textContent = `Click count: ${number}`;
  return () => {
    document.body.textContent = `Click count: ${++number}`;
  };
};

const counter = add();
const click = document.addEventListener("click", counter);

//! Timer
// const clock = () => {
//   let sec = 0;
//   document.body.textContent = `${sec} sec`;
//   const timer = () => {
//     document.body.textContent = `${++sec} sec`;
//   };
//   return timer;
// };

// const start = clock();
// setInterval(start, 1000);
