import TasksList from '../components/TasksList'
const TodayPage = () => {
  return (
    <div className='m-8 grow shrink '>
      <h1 className='text-2xl font-bold'>Today</h1>
      <span className='text-sm text-gray-500'>3 tasks</span>

      <TasksList />
    </div>
  )
}

export default TodayPage
