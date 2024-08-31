function DiscoverMore(props) {

    return (
        <div className="bg-gray-400 w-fit mx-5 xl:mx-auto p-5 rounded shadow shadow-black">
            <div className={"hidden lg:grid grid-cols-2 w-full max-w-screen-xl m-auto"}>
                <img alt={""} className={"w-full"} src={process.env.PUBLIC_URL + "/Working.png"}/>
                <div className={"w-2/3 m-auto"}>
                    <h1 className={"text-gray-800 text-6xl font-bold mb-5"}>Discover more about Empire Electric</h1>
                    <h1 className={"text-lg font-semibold"}>At Empire Electric, we are committed to illuminating the
                        path of innovation. Our journey began with a vision to redefine electrical solutions, driven by
                        a passion for excellence and sustainability. Every project is infused with our core values,
                        striving to enhance communities through reliable and cutting-edge electrical services.</h1>
                </div>
            </div>

            <div className={" lg:hidden px-6"}>
                <div className={"w-full m-auto"}>
                    <h1 className={"text-gray-800 text-3xl font-bold mb-2"}>Discover more about Empire Electric</h1>
                    <h1 className={"text-md font-semibold mb-5"}>At Empire Electric, we are committed to illuminating the
                        path of innovation. Our journey began with a vision to redefine electrical solutions, driven by
                        a passion for excellence and sustainability. Every project is infused with our core values,
                        striving to enhance communities through reliable and cutting-edge electrical services.</h1>
                </div>
                <img alt={""} className={"w-full"} src={process.env.PUBLIC_URL + "/Working.png"}/>
            </div>
        </div>
    );
}

export default DiscoverMore;
