import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Spinner from './components/Loading';

function App() {
 
  const [results, setResults] = useState([]);
  
  const api = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
        // get the data from an API
      fetch(api)
        .then(response => response.json())
        .then(data => {
          // simulate delay - large data is fetching
          setTimeout(() => {
              setResults(data);
          }, 5000);
        })
        .catch(error => console.error("Failed to fetch: " + error));
  }, []);

  // using async / await
  // async function async_FetchAPI(){
  //     try{
  //         const response = await fetch(api);
  //         const data = await response.json();
  //         setResults(data);
  //         data && showResult(true);
  //     }
  //     catch(error){
  //         console.error("Failed to fetch: " + error)
  //     }
  // }
  
  return (
    <>
      <div className='grid gap-3 p-5'>
        <Header/>
        {
          (results.length > 0) ?
          (
            <div className='bg-gray-50 p-10 rounded-md grid grid-cols-5 gap-3 mt-5'>
                {
                  results.map((user) => (
                      <Profile name={user.name} username={user.username} email={user.email}/>
                  ))
                }
            </div>
          ) : 
          (
            <div className='h-90 flex justify-center items-center'>
              <Spinner/>
            </div>
          )
        }
        
      </div>

    </>
  )
}

export default App
