let count = 0;
countDisplay(count);

const addForm = document.querySelector(".add");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = addForm.task.value;

  addTask(val.trim());
  addForm.reset();
});
function addTask(val) {
  if (!val) return;
  let line = document.querySelector(".tasks");
  line.innerHTML += `<li><span>${val}</span>
                          <img src="trash.jpg" alt="" class="delete" />
                     </li>`;
  count++;
  countDisplay(count);
}
const taskDel = document.querySelector(".task-list");
taskDel.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    count--;
    countDisplay(count);
  }
});

let clear = document.querySelector(".del");
clear.addEventListener("click", (e) => {
  let line = document.querySelectorAll("li");
  line.forEach((item) => {
    item.remove();
  });
  count = 0;
  countDisplay(count);
});
function countDisplay(countVal) {
  let cval = document.querySelector(".counter");
  cval.innerHTML = countVal;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("keyup", (e) => {
  const term = searchForm.task.value.trim().toLowerCase();
  filterTask(term);
});

function filterTask(term) {
  let tasks = document.querySelector(".tasks");
  const list = Array.from(tasks.children).filter((item) => {
    return !item.textContent.toLowerCase().includes(term);
  });
  list.forEach((item) => {
    item.classList.add("hide");
  });
}
const delBtn = document.querySelector(".delBtn");
delBtn.addEventListener("click", (e) => {
  searchForm.task.value = "";
  let tasks = document.querySelector(".tasks");
  const list = Array.from(tasks.children);
  list.forEach((item) => item.classList.remove("hide"));
});
