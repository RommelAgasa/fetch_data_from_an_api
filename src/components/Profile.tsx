
export type Address = { 
    city: string;
    zipcode: string;
}

export type User = {
    name: string;
    username:string;
    email: string;
    address:Address;
    phone: string;
    website: string;
}

export default function Profile({name, username, email, address, phone, website}: User){

    return(
        <>
            <div className="border rounded-md w-full flex flex-col justify-center items-center p-4">
                <div className="w-40 flex justify-center items-center mb-4 bg-gray-200 p-4 rounded-md">
                    <i className="fa-solid fa-user-secret text-7xl"></i>
                </div>
                <div>
                    <h1>Name: {name}</h1>
                    <h2>Username: {username}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Adddress: {address.city + ", " + address.zipcode}</h2>
                    <h2>Phone: {phone}</h2>
                    <h2>Website: {website}</h2>
                </div>
            </div>
        </>
    );

}