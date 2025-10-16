import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Spinner from './components/Loading';
import type { User } from './components/Profile';

function App() {
  // ✅ Fix 1: Use User[]
  const [allUsers, setAllUsers] = useState<User[]>([]);  // full data cache
  const [results, setResults] = useState<User[]>([]);

  const api = 'https://jsonplaceholder.typicode.com/users';

  // ✅ Fix 2: Call fetchData() inside useEffect
  useEffect(() => {
    fetchData();
  }, []); // run once on mount

  function fetchData() {
    fetch(api)
      .then(response => response.json())
      .then((data: User[]) => {
        console.log(data);
        setTimeout(() => {
          setAllUsers(data); // cache
          setResults(data);
        }, 2000);
      })
      .catch(error => console.error('Failed to fetch: ' + error));
  }

  return (
    <>
      <div className="grid gap-3 p-5">
        <Header users={allUsers} updateResults={setResults} />
        {results.length > 0 ? (
          <div className="bg-gray-50 p-10 rounded-md grid grid-cols-5 gap-3 mt-5">
            {results.map((user) => (
              <Profile
                key={user.email}
                name={user.name}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                website={user.website}
              />
            ))}
          </div>
        ) : (
          <div className="h-90 flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
