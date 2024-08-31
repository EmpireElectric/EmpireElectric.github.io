import { useRef, useState, useEffect } from "react";
import Video from './Video'

function Home(props) {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    const bookOnlineRef = useRef()

    useEffect(() => {
        if (modal) {
            const onMessage = (ev) => {
                if (ev.data === 'hcp:close') {
                    setModal(false)
                }
            }

            bookOnlineRef.current?.contentWindow?.postMessage("hcp:open","*")
            document.body.style.overflowY = "hidden"
            window.addEventListener("message", onMessage)

            return () => {
                window.removeEventListener("message", onMessage)
            }
        } else
            document.body.style.overflowY = "visible"
    }, [modal])

  return (
    <>
        <Video/>
        <div className={"text-white animate-fadein"}>

            {/* Desktop Text */}
            <div className={"hidden sm:block mt-[30vh] ml-[20vw]"}>
                <h1 className={"text-6xl font-semibold font-serif"}>
                    Empire Electric
                </h1>
                <h1 className={"text-4xl text-gray-200 font-semibold font-serif"}>
                    Premium Electrical <br/> Solutions
                </h1>
                <a href={"tel:+19375415098"} className={"text-xl text-gray-400 font-semibold"}>
                    (937)-541-5098
                </a>
            </div>

            {/* Mobile Text */}
            <div className="sm:hidden ml-10 mt-10">
                <h1 className={"text-6xl font-semibold font-serif"}>
                    Empire Electric
                </h1>
                <h1 className={"text-4xl text-gray-200 font-semibold font-serif"}>
                    Premium Electrical Solutions
                </h1>
                <a href={"tel:+19375415098"} className={"text-xl text-gray-400 font-semibold"}>
                    (937)-541-5098
                </a>
            </div>


            {/* Desktop Button Layout */}
            <div className={"hidden sm:flex gap-2 my-5 ml-[20vw]"}>
                <button onClick={() => {toggleModal()}} className={"bg-blue-600 active:bg-blue-800 p-2 mx-2 hover:px-4 hover:mx-0 rounded shadow-blue-900 shadow-md duration-200"}>Book Online</button>
                <button onClick={() => {window.location = '/ContactUs'}} className={"bg-green-600 active:bg-green-800 p-2 mx-2 hover:px-4 hover:mx-0 rounded shadow-green-900 shadow-md duration-200"}>Contact Us</button>
                <button onClick={() => {window.location = '/AboutUs'}} className={"bg-gray-600 active:bg-gray-800 p-2 mx-2 hover:px-4 hover:mx-0 rounded shadow-gray-900 shadow-md duration-200"}>About Us</button>
            </div>

            {/* Mobile Button Layout */}
            <div className={"sm:hidden grid grid-cols-1 absolute bottom-0 left-5 right-5 gap-5 my-5"}>
                <button onClick={() => {toggleModal()}} className={"bg-blue-600 active:bg-blue-800 p-2 rounded shadow-blue-900 shadow-md duration-200"}>Book Online</button>
                <button onClick={() => {window.location = '/ContactUs'}} className={"bg-green-600 active:bg-green-800 p-2 rounded shadow-green-900 shadow-md duration-200"}>Contact Us</button>
                <button onClick={() => {window.location = '/AboutUs'}} className={"bg-gray-600 active:bg-gray-800 p-2 rounded shadow-gray-900 shadow-md duration-200"}>About Us</button>
            </div>
        </div>

        <dialog open={modal} className={"z-10 absolute w-full h-full top-0 bg-gray-900/60"}>
            <iframe title={"BookOnline"} ref={bookOnlineRef} className={"w-full h-full absolute top-0"}
                src={"https://book.housecallpro.com/book/Empire-Electric/d6be251fe2034c498bd1db3a19293fbb?v2=true"}/>
        </dialog>
    </>
  );
}

export default Home;
