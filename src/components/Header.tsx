import { useState } from "react";

type HeaderProps = {
    showResult(show: boolean) : void,
    updateResult(): void
}
export default function Header(){

    function validateAPI(e: React.FormEvent){
        e.preventDefault();
        // if(api.trim() != null){
        //     //fetchAPI();
        //     async_FetchAPI();
        // }
    }

    return (
        <>
            <div>
                <form className="flex bg-gray-50 rounded-md h-20 justify-start items-center gap-3 p-4" 
                noValidate onSubmit={validateAPI}>
                    <div className="">
                        <button
                        type="submit"
                        className="bg-gray-600 text-white p-2 rounded-md w-26 hover:bg-gray-500 cursor-pointer">Search</button>
                    </div>
                    <div>
                        <input className="border border-gray-600 focus:border-blue-500 outline-none p-2 w-[500px]" 
                        type="text"
                        placeholder="Enter API"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}