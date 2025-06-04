import './index.css'
import Navbar from './components/Navbar'
import MainRoute from './routes/MainRoute'



const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-700'>
      <Navbar />
      <MainRoute />
    </div>
  )
}

export default App
