const removeTask = (e) => {
  // e.target.parentNode.remove();
  // e.target.parentNode.style.textDecoration = "line-through";

  const liIndex = e.target.dataset.key;
  document.querySelector(`li[data-key="${liIndex}"]`).style.textDecoration =
    "line-through";
};

document
  .querySelectorAll("button[data-key]")
  .forEach((item) => item.addEventListener("click", removeTask));
