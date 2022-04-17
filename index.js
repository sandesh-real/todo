const todoAdd = document.querySelector(".itemadd-btn");
const input = document.querySelector(".input-todo");

const taskBtn = document.querySelector(".task-complete");
const todoLists = document.querySelector(".todo-lists");

let lists = [];

todoAdd.addEventListener("click", () => {
  if (input.value) {
    const randomId = Math.random();
    lists.push({ title: input.value, id: randomId, cssStyle: "" });
  }
  input.value = "";
  createList();
});

const createList = () => {
  todoLists.innerHTML = "";
  if (lists.length > 0) {
    const listsString = lists.map((item) => {
      return `<div class="list"  id="${item.id}">
        <div class="block-access ${item.cssStyle}" id="${item.id}"></div>
         <div class="list-detail"   id="${item.id}">
             <h2   id="${item.id}">${item.title}</h2>
   
             <span    id="${item.id}"class="task-complete">click if task complete</span>
         </div>
         <span id=${item.id} class="delete-btn">Delete</span>
     </div>`;
    });
    todoLists.insertAdjacentHTML("afterbegin", listsString);
    document.querySelectorAll(".delete-btn").forEach((item) => {
      deleteItem(item);
    });
    document.querySelectorAll(".list").forEach((item) => {
      item.addEventListener("click", (e) => {
        lists = lists.map((item) => {
          if (item.cssStyle !== "block-access-remove") {
            console.log(e.target, item.id);
            if (parseFloat(e.target.id) === item.id) {
              console.log("ahah");
              item.cssStyle = "block-access-remove";
            }
          } else {
            console.log(e.target, item.id);
            if (parseFloat(e.target.id) === item.id) {
              item.cssStyle = "";
            }
          }

          return item;
        });
        console.log(lists);
        createList();
      });
    });
  } else {
    todoLists.insertAdjacentHTML(
      "afterbegin",
      "<p class='not-found'>No item found</p>"
    );
  }
};
createList();

const deleteItem = (item) => {
  item.addEventListener("click", (e) => {
    lists = lists.filter((item) => {
      return item.id !== +e.target.id;
    });
    createList();
  });
};
