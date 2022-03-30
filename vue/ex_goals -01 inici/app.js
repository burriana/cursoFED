const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);

//-----------------------------

var vm = new Vue({
  el:'#app',
  data: {
    goal:[],
    enteredValue:''
  },
  methods: {
    addGoal: function(){
      this.goal.push(this.enteredValue);
      this.enteredValue = ''
      console.log(this.goal)
    }
  }
})