function GetInTouch(props) {



    return (
        <div className={"m-5 sm:mx-auto w-fit p-5 bg-gray-400 rounded shadow shadow-black"}>
            <div className={"m-auto w-fit mb-3 bg-red"}>
                <h1 className={"text-6xl font-bold text-gray-800"}>Get In Touch</h1>
                <p className={"text-xl max-w-96"}>
                    If you are interested in collaborating with us, please share your information. We look forward to
                    connecting with you soon!
                </p>
            </div>
            <div className={"grid grid-cols-1"}>
                <a href={"mailto: cadenrodriguez@empireelectricmiami.com"}
                   className="underline pt-3 text-center text-sm lg:text-lg sm:text-xl font-semibold text-blue-700 active:text-blue-900">
                    cadenrodriguez@empireelectricmiami.com
                </a>
            </div>
            <div className={"grid grid-cols-1"}>
                <a href={"tel:+19375415098"}
                   className="underline pt-3 text-center text-xl font-semibold text-blue-700 active:text-blue-900">
                    937-541-5098
                </a>
            </div>
        </div>
    );
}

export default GetInTouch;
