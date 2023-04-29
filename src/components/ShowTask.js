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
                    {taskList.map((task) => 
                    <li key={task.id}>
                        <p>
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i className='bi bi-pencil-square' />
                        <i className='bi bi-trash' />
                    </li>
                    )}

                </ul>
            </section>
        </>
    )
}

export default ShowTask