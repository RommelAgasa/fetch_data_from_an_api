type ProfileProp = {
    name: string;
    username:string;
    email: string;
}

export default function Profile({name, username, email}: ProfileProp){

    return(
        <>
            <div className="border w-full flex flex-col justify-center items-center p-4">
                <div className="w-40 flex justify-center items-center mb-4 bg-gray-200 p-4 rounded-md">
                    <i className="fa-solid fa-user-secret text-7xl"></i>
                </div>
                <div>
                    <h1>Name: {name}</h1>
                    <h2>Username: {username}</h2>
                    <h2>Email: {email}</h2>
                </div>
            </div>
        </>
    );

}