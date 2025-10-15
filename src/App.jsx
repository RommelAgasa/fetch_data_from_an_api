import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'

function App() {
 
  const [showResult, toggleResult] = useState(false);
  const [results, setResults] = useState([]);


  const api = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
        // get the data from an API
      fetch(api)
        .then(response => response.json())
        .then(data => {
          console.log(data);
            setResults(data); // update the data/results
            data && toggleResult(true); // show the results
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
          showResult ?
          (
            <div className='bg-gray-50 p-10 rounded-md grid grid-cols-5 gap-2 mt-5'>
                {
                  results.map((user) => (
                      <Profile name={user.name} username={user.username} email={user.email}/>
                  ))
                }
            </div>
          ) : 
          (
            <div className='h-90  flex items-center justify-center'>
                Please enter your API and press the fetch button.
            </div>
          )
        }
        
      </div>

    </>
  )
}

export default App
