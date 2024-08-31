function Home(props) {

  return (
    <>
        <video src={process.env.PUBLIC_URL + '/BannerVideo.mov'} className={"fixed top-0 -z-20 w-auto min-w-full min-h-full max-w-none"} loop autoPlay muted playsInline>
        </video>
        <div className="absolute inset-0 bg-black/80 -z-10">

        </div>
        <div className={"ml-[20vw] mt-[30vh] text-white w-fit p-4 bg-opacity-50 rounded"}>
            <h1 className={"text-6xl font-semibold font-serif"}>
                Empire Electric
            </h1>
            <h1 className={"text-4xl text-gray-200 font-semibold font-serif"}>
                Premium Electrical <br/> Solutions
            </h1>
            <h1 className={"text-xl text-gray-400 font-semibold"}>
                (937)-541-5098
            </h1>
            <div className={"flex gap-5 my-5"}>
                <button className={"bg-blue-600 active:bg-blue-800 p-2 hover:px-3 rounded shadow-blue-900 shadow-md duration-200"}>Book Online</button>
                <button onClick={() => {window.location = '/ContactUs'}} className={"bg-green-600 active:bg-green-800 p-2 hover:px-3 rounded shadow-green-900 shadow-md duration-200"}>Contact Us</button>
                <button onClick={() => {window.location = '/AboutUs'}} className={"bg-gray-600 active:bg-gray-800 p-2 hover:px-3 rounded shadow-gray-900 shadow-md duration-200"}>About Us</button>
            </div>
        </div>
    </>
  );
}

export default Home;
