import { useState } from "react";
import type { User } from './Profile';


type HeaderProps = {
    users: User[];
    updateResults: (users: User[]) => void;
}

export default function Header({ users, updateResults } : HeaderProps){

    const [search, setSearch] = useState("");

    function filter(e: React.FormEvent){
        e.preventDefault();
        if(search.trim() != ""){
            const keyword = search.toLowerCase();
            const filteredData = users.filter(
                u  => (
                    u.name.toLowerCase().includes(keyword) ||
                    u.username.toLowerCase().includes(keyword) || 
                    u.email.toLowerCase().includes(keyword)
                )
            );
            updateResults(filteredData);
        }
    }
    
    return (
    <div className="flex items-center justify-between bg-gray-50 rounded-md h-20 p-4">
        {/* Search Form */}
        <form
        noValidate
        onSubmit={filter}
        className="flex items-center gap-3"
        >
        
        <button
            type="submit"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 cursor-pointer"
        >
            Search
        </button>
        <input
            className="border border-gray-600 focus:border-blue-500 outline-none p-2 w-[400px] rounded-md"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
        />
        </form>

        {/* Clear Button */}
        <button
        onClick={() => {setSearch(""); updateResults(users)}}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 cursor-pointer"
        >
        Clear Search
        </button>
    </div>
    );

}