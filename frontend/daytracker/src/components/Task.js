const Task = ({title, notes}) => {
return(
    <div className='task'>
        <h3>{title}</h3>
        <h3>{notes}</h3>
    </div>
)
}

export default Task