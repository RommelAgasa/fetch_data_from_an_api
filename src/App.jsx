import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'

function App() {
 
  const [toggleResult]
  return (
    <>
      <div className='grid gap-3 p-5'>
        <Header/>
        
        <div className='bg-gray-50 p-10 rounded-md'>
          <div className='uppercase mb-4 flex justify-end'>
              <input type="text" 
              placeholder='Search...'
              className="border border-gray-600 focus:border-blue-500 outline-none p-2 w-[500px]"/>
          </div>
          <div className='grid grid-cols-5 gap-2 mt-5'>
              <Profile/>
              <Profile/>
              <Profile/>
              <Profile/>
              <Profile/>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default App
