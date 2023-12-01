import Task from './Task'

const Main = ({tasks}) => {
    return(
        <div className='main'>
            {tasks.map((task) => (
                <Task title={task.title} notes={task.notes}/>
            ))}
        </div>
    )
}

export default Main