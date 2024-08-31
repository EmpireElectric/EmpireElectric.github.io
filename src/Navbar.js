function GetInTouch(props) {



    return (
        <div className={"w-full bg-gray-700 shadow shadow-black p-3 mb-3 sticky top-0 z-50 text-white"}>
            <div className={"flex max-w-screen-xl gap-5 mx-auto"}>
            <button onClick={() => {window.location = '/'}} className={"bg-blue-600 active:bg-blue-800 p-2 mx-2 hover:px-4 hover:mx-0 rounded shadow-blue-900 shadow-md duration-200"}>Home</button>
                <button onClick={() => {window.location = '/ContactUs'}} className={"bg-green-600 active:bg-green-800 p-2 mx-2 hover:px-4 hover:mx-0 rounded shadow-green-900 shadow-md duration-200"}>Contact Us</button>
                <button onClick={() => {window.location = '/AboutUs'}} className={"bg-gray-600 active:bg-gray-800 p-2 mx-2 hover:px-4 hover:mx-0 rounded shadow-gray-900 shadow-md duration-200"}>About Us</button>
            </div>
        </div>
        
    );
}

export default GetInTouch;
