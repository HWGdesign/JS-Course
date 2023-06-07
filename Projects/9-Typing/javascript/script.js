//HTML text area
const span = document.querySelector(".text");
const cursor = document.querySelector(".cursor");
//Content
const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit praesentium accusantium dolore quos similique, dignissimos, libero consequatur minima architecto dolores consectetur quidem nesciunt suscipit iusto perspiciatis itaque doloremque doloribus veniam amet nisi explicabo.";

//Parameters
let indexText = 0;
const time = 2;
const cursorTime = 500;
//Function
const addLetter = () => {
  span.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) {
    clearInterval(indexTyping);
  }
};

const cursorAnim = () => {
  cursor.classList.toggle("active");
};

//Interval
const indexTyping = setInterval(addLetter, time);

//Cursor
const cursorAnimation = setInterval(cursorAnim, cursorTime);
