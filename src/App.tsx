import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Spinner from './components/Loading';
import type { User } from './components/Profile';

function App() {

  const [allUsers, setAllUsers] = useState<User[]>([]);  // full data cache
  const [results, setResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetchingData, setError] = useState("");

  const api = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetchData();
  }, []); // run once on mount


  async function fetchData() {
    try {
      const response = await fetch(api);

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }

      const data: User[] = await response.json();

      // simulate loading delay
      setTimeout(() => {
        setAllUsers(data);
        setResults(data);
        setIsLoading(false);
      }, 2000);

    } catch (error: any) {
      setIsLoading(false);

      const isNetworkError = error.name === "TypeError";
      const friendlyMsg = isNetworkError
        ? "Network error or invalid API URL. Please check your connection."
        : error.message;

      setError(`Failed to fetch: ${friendlyMsg}`);
      console.error("Full error:", error);
    }
  }

  return (
    <>
      <div className="grid gap-3 p-5">
        <Header users={allUsers} updateResults={setResults} />

        {/** Error Fetching Data */}
        {
          errorFetchingData && 
          <div className="bg-gray-50 p-10 rounded-md mt-3">
            <p className='font-bold'>{errorFetchingData}</p>
          </div>
        }

        {/** Done Loading? Display the data */}
        {!isLoading && !errorFetchingData && (
          <div className="bg-gray-50 p-10 rounded-md grid grid-cols-5 gap-3 mt-3">
            {
              (results.length > 0) ? 
                (
                  results.map((user) => (
                    <Profile
                      key={user.email}
                      name={user.name}
                      username={user.username}
                      email={user.email}
                      address={user.address}
                      phone={user.phone}
                      website={user.website}
                    />
                  ))
                )
              : 
              <div>
                    <p className='font-bold'>Sorry No Data Found!</p>
              </div>
            }
          </div>)
        }
        
        {/** Loading animation */}
        {
          isLoading && !errorFetchingData && (
            <div className="h-90 flex justify-center items-center">
              <Spinner />
            </div>
          )
        } 
      </div>
    </>
  );
}

export default App;
