document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
      e.preventDefault()
      buildTask(e.target.newtask.value)
      form.reset()
  let form =document.querySelector('form')
  form.addEventListener('submit',(event)=>{
    event.preventDefault()
   // console.log(event.target.newtask.value)
   // console.log(event.target.user.value)
    let newTodo=event.target.newtask.value
    let user=event.target.user.value
    let priority=event.target.priority.value
    console.log(priority)
    Todo(newTodo,user,priority)
    console.log(newTodo,user)
    form.reset()
  
  })
})
});
