function SocialMedia(props) {


    return (
        <div className={"m-5"}>
            <div className={"w-full max-w-screen-xl sm:m-auto p-3 bg-gray-400 rounded shadow shadow-black"}>
                <h1 className={"text-3xl md:text-5xl font-bold text-gray-800 w-full text-center"}>Connect with us through social media</h1>

                <div className={"grid grid-cols-2 grid-rows-2 lg:grid-cols-4 gap-3 lg:grid-rows-none m-3"}>
                    <img alt={""} className={"rounded"} src={process.env.PUBLIC_URL + "/GarageWork.png"}/>
                    <img alt={""} className={"rounded"} src={process.env.PUBLIC_URL + "/HouseWork1.png"}/>
                    <img alt={""} className={"rounded"} src={process.env.PUBLIC_URL + "/HouseWork2.png"}/>
                    <img alt={""} className={"rounded"} src={process.env.PUBLIC_URL + "/Trenching.png"}/>
                </div>
                <div className={"w-fit mx-auto mt-5 mb-2"}>
                    <a className={"text-white text-2xl font-semibold bg-orange-500 p-2 rounded-md active:bg-orange-600 duration-200"}
                    href={"https://www.facebook.com/EmpireEle/"} rel={"noreferrer"} target={"_blank"}>Facebook</a>
                </div>
            </div>
        </div>
        
    );
}

export default SocialMedia;
