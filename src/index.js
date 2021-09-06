document.addEventListener("DOMContentLoaded", () => {
  //listen for submit button click, and event.preventDefault method
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); 
    handleToDo(e.target['new-task-description'].value);
    // this is the part that needs help. How to target that text input
  })
})

function handleToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  //this takes string, and builds that element on string it matches up with
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove(); 
}