const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);

//-----------------------------

var vm = new Vue({
  el: "#app",
  data: {
    goal: [],
    enteredValue: "",
  },
  methods: {
    addGoal: function () {
      this.goal.push(this.enteredValue);
      this.enteredValue = "";
      console.log(this.goal);
    },
    delGoals: function () {
      (this.goal = []), (this.enteredValue = "");
    },
    goalDone: function (e) {
      e.target.style.textDecoration = 'line-through'
      e.target.style.background = "grey";
    },
    enter: function (e) {
      if (e.key === "Enter") {
        this.addGoal();
      }
    },

    delTask: function (e) {
      let indice = this.goal.indexOf(e.target);
      if (indice !== -1) {
        this.goal.splice(indice, 1);
      }
      this.goal.splice(indice, 1);
    },
    deshacer: function(e){
      e.target.style.textDecoration = 'none'
      e.target.style.background = "yellowgreen";
    }
  },
});
