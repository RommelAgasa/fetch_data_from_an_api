

export default function Header(){

    return (
        <>
            <div className="flex bg-gray-50 rounded-md h-20 justify-start items-center gap-3 p-4">
                <div className="">
                    <button className="bg-gray-600 text-white p-2 rounded-md w-26 hover:bg-gray-500 cursor-pointer">Fetch</button>
                </div>
                <div>
                    <input className="border border-gray-600 focus:border-blue-500 outline-none p-2 w-[500px]" 
                    type="text" 
                    placeholder="Enter API"
                    />
                </div>
            </div>
        </>
    );
}