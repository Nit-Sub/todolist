import React from 'react'

const ShowTask = ({taskList , setTaskList}) => {
    return (
        <>
            <section className='showTask'>
                <div className='head'>
                    <div>
                        <span className='title'>To Do</span>
                        <span className='count'>{taskList.length}</span>
                    </div>
                    <button className='clearAll' onClick={()=>setTaskList([])}>Clear All</button>
                </div>
                <ul>
                    {taskList.map((todo) => 
                    <li key={todo.id}>
                        <p>
                            <span className='name'>{todo.name}</span>
                            <span className='time'>{todo.time}</span>
                        </p>
                        <i className='bi bi-pencil-square' ></i>
                        <i className='bi bi-trash' ></i>
                    </li>
                    )}

                </ul>
            </section>
        </>
    )
}

export default ShowTask