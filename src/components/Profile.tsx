type ProfileProp = {
    name: string;
    age:number;
}


export default function Profile(props: ProfileProp){

    return(
        <>
            <div className="border w-full flex flex-col justify-center items-center p-6">
                <div>

                </div>
                <div>
                    <h1>Name: Jhon Doe</h1>
                    <h2>Age: 26</h2>
                </div>
            </div>
        </>
    );

}