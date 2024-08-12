function SocialMedia(props) {


    return (
        <div className={"w-full max-w-screen-xl m-auto p-6"}>
            <h1 className={"text-5xl font-bold text-gray-800 w-full text-center"}>Connect with us through social media</h1>

            <div className={"grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg: lg:grid-rows-none"}>
                <img className={"p-3"} src={process.env.PUBLIC_URL + "/GarageWork.png"}/>
                <img className={"p-3"} src={process.env.PUBLIC_URL + "/HouseWork1.png"}/>
                <img className={"p-3"} src={process.env.PUBLIC_URL + "/HouseWork2.png"}/>
                <img className={"p-3"} src={process.env.PUBLIC_URL + "/Trenching.png"}/>
            </div>
            <div className={"w-fit mx-auto my-10"}>
                <a className={"text-white text-2xl font-semibold bg-orange-500 p-2 rounded-md active:bg-orange-600 duration-200"}
                   href={"https://www.facebook.com/EmpireEle/"} target={"_blank"}>Facebook</a>
            </div>


        </div>
    );
}

export default SocialMedia;
