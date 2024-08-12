function Services(props) {

    return (
        <div className={"w-full max-w-screen-xl mx-auto lg:py-6"}>
            <h1 className={"text-3xl xl:text-6xl font-bold text-gray-800 max-w-xl w-full ml-6 pt-10 pb-6 pr-12 lg:pr-0"}>Our Comprehensive
                Services</h1>

            <div className={"hidden md:grid grid-cols-3"}>
                <img className={"w-full px-6 lg:row-span-2"} src={process.env.PUBLIC_URL + "/ElectricalBox.png"}/>
                <img className={"w-full px-6 lg:row-span-2"} src={process.env.PUBLIC_URL + "/ElectricalSocket.png"}/>
                <img className={"w-full px-6 lg:row-span-2"} src={process.env.PUBLIC_URL + "/LightFixtures.png"}/>
            </div>
            <div className={"hidden md:grid grid-cols-3"}>
                <div className={"px-6 xl:pr-12"}>
                    <h1 className={"text-orange-500 font-bold text-2xl underline"}>Residential Service</h1>
                    <br/>
                    <p className={"font-semibold"}>This service includes the installation, maintenance, and repair of
                        electrical
                        systems within residential properties.</p>
                    <br/>
                    <p>(servicing Dayton and surrounding areas)</p>
                </div>
                <div className={"px-6 xl:pr-12"}>
                    <h1 className={"text-orange-500 font-bold text-2xl underline"}>24/7 Emergency Service</h1>
                    <br/>
                    <p className={"font-semibold"}>Our electricians are available at all hours, including nights,
                        weekends, and holidays, to respond quickly to emergency calls. This ensures that critical issues
                        are addressed promptly, minimizing potential damage and safety hazards.</p>
                </div>
                <div className={"px-6 xl:pr-12"}>
                    <h1 className={"text-orange-500 font-bold text-2xl underline"}>100% Satisfaction Guarantee</h1>
                    <br/>
                    <p className={"font-semibold"}>We believe in a company's commitment to excellence, professionalism,
                        and customer care, giving clients confidence that their electrical needs will be met to their
                        highest standards.</p>
                </div>
            </div>

            <div className={"md:hidden"}>
                <div className={"px-6 xl:pr-12"}>
                    <h1 className={"text-orange-500 font-bold text-2xl underline"}>Residential Service</h1>
                    <p className={"font-semibold"}>This service includes the installation, maintenance, and repair of
                        electrical
                        systems within residential properties.</p>
                    <br/>
                    <p>(servicing Dayton and surrounding areas)</p>
                </div>
                <img className={"w-full p-6 max-w-sm mx-auto"} src={process.env.PUBLIC_URL + "/ElectricalBox.png"}/>

                <div className={"px-6 xl:pr-12"}>
                    <h1 className={"text-orange-500 font-bold text-2xl underline"}>24/7 Emergency Service</h1>
                    <p className={"font-semibold"}>Our electricians are available at all hours, including nights,
                        weekends, and holidays, to respond quickly to emergency calls. This ensures that critical issues
                        are addressed promptly, minimizing potential damage and safety hazards.</p>
                </div>
                <img className={"w-full p-6 max-w-sm mx-auto"} src={process.env.PUBLIC_URL + "/ElectricalSocket.png"}/>

                <div className={"px-6 xl:pr-12"}>
                    <h1 className={"text-orange-500 font-bold text-2xl underline"}>100% Satisfaction Guarantee</h1>
                    <p className={"font-semibold"}>We believe in a company's commitment to excellence, professionalism,
                        and customer care, giving clients confidence that their electrical needs will be met to their
                        highest standards.</p>
                </div>
                <img className={"w-full p-6 max-w-sm mx-auto"} src={process.env.PUBLIC_URL + "/LightFixtures.png"}/>
            </div>
        </div>
    );
}

export default Services;
