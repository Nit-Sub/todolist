import React from 'react'

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleChange = (e) => {
        e.preventDefault();
        if(task.id){
            const date = new Date();
            const updatedTasklist = taskList.map((todo) => (
              todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ));
            setTaskList(updatedTasklist);
          } else {
            const date = new Date();
            const newTask = {
              id: date.getTime(), 
              name: e.target.task.value, 
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask]);
            e.target.task.value = "";
          }
        }
    return (
        <>
            <section className="addTask">
                <form onSubmit={handleChange}>
                    <input placeholder='addTask' type='text' value={task.name} name='task' maxLength={45} autoComplete='off' onChange={(e)=> setTask({...task, name: e.target.value})}/>
                    <button type='submit'>Add</button>
                </form>
            </section>
        </>
    )
}

export default AddTask