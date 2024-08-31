function Services(props) {

    return (
        <>
            <h1 className="max-w-screen-xl ml-5 xl:mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700">
                Our Comprehensive<br/>Services
            </h1>

            <div className={"max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap p-5 justify-center"}>
                <div className="m-5 h-fit max-w-96 min-w-60 bg-gray-400 rounded overflow-clip shadow shadow-black">
                    <div className="w-full h-fit inline-block relative text-white font-bold">
                        <img className="w-full h-full" src={process.env.PUBLIC_URL + '/ElectricalBox.png'}/>
                        <div className="absolute inset-0 flex items-center justify-center p-5 bg-black/50">
                            <p className="text-2xl text-center font-serif">
                                Residential Service
                            </p>
                        </div>
                    </div>
                    <p className="p-2 font-semibold">
                        This service includes the installation, maintenance, and repair of electrical systems within residential properties. (Servicing Dayton and surrounding areas)
                    </p>
                </div>

                <div className="m-5 h-fit max-w-96 min-w-60 bg-gray-400 rounded overflow-clip shadow shadow-black">
                    <div className="w-full h-fit inline-block relative text-white font-bold">
                        <img className="w-full h-full" src={process.env.PUBLIC_URL + '/ElectricalSocket.png'}/>
                        <div className="absolute inset-0 flex items-center justify-center p-5 bg-black/50">
                            <p className="text-2xl text-center font-serif">
                                24/7 Emergency Service
                            </p>
                        </div>
                    </div>
                    <p className="p-2 font-semibold">
                    Our electricians are available at all hours, including nights, weekends, and holidays, to respond quickly to emergency calls. This ensures that critical issues are addressed promptly, minimizing potential damage and safety hazards.
                    </p>
                </div>

                <div className="m-5 h-fit max-w-96 min-w-60 bg-gray-400 rounded overflow-clip shadow shadow-black">
                    <div className="w-full h-fit inline-block relative text-white font-bold">
                        <img className="w-full h-full" src={process.env.PUBLIC_URL + '/LightFixtures.png'}/>
                        <div className="absolute inset-0 flex items-center justify-center p-5 bg-black/50">
                            <p className="text-2xl text-center font-serif">
                                100% Satisfaction Guarantee
                            </p>
                        </div>
                    </div>
                    <p className="p-2 font-semibold">
                    We believe in our company's commitment to excellence, professionalism, and customer care, giving clients confidence that their electrical needs will be met to their highest standards.
                    </p>
                </div>
                
            </div>
        </>
    );
}

export default Services;
