import React from 'react'

const AddTask = ({taskList , setTaskList}) => {
    const handleChange=(e)=>{
        e.preventDefault();
        const date = new Date();
         const newTask={
            id:date.getTime(),
            name:e.target.task.value,
            time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
         }
         setTaskList([...taskList,newTask])
    }
    return (
        <>
            <section className="addTask">
                <form onSubmit={handleChange}>
                    <input placeholder='addTask' type='text' name='task' maxLength={45} autoComplete='off'/>
                    <button  type='submit'>Add</button>
                </form>
            </section>
        </>
    )
}

export default AddTask