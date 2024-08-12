import {useEffect, useRef, useState} from "react"

function Header(props) {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    const bookOnlineRef = useRef()

    const scrollToBottom = () => {
        const bodyHeight = document.body.offsetHeight
        window.scrollTo({ top: bodyHeight, behavior: "smooth" })
    }

    const onMessage = (ev) => {
        if (ev.data === 'hcp:close') {
            toggleModal()
        }
    }

    useEffect(() => {
        if (modal) {
            window.scroll({top: 0, behavior: "instant"})
            bookOnlineRef.current?.contentWindow?.postMessage("hcp:open","*")
            document.body.style.overflowY = "hidden"
            window.addEventListener("message", onMessage)

            return () => {
                window.removeEventListener("message", onMessage)
            }
        } else
            document.body.style.overflowY = ""
    }, [modal])

  return (
      <div className={"max-w-screen-xl m-auto"}>

          <h1 className="text-6xl w-full text-center font-bold text-gray-800">
              Empire Electric
          </h1>
          <div className={"grid grid-cols-1"}>
              <a href={"tel:+19375415098"}
                 className="pt-3 text-center text-xl font-semibold text-blue-500 active:text-blue-600">
                  937-541-5098
              </a>
          </div>

          <div className={"grid grid-cols-2 md:grid-cols-6 font-semibold"}>
              <button onClick={() => {
                  toggleModal()
              }}
                      className={"text-center md:col-start-3 bg-green-500 active:bg-green-600 p-3 m-5 rounded-md drop-shadow-lg shadow-black duration-200"}>Book
                  Online
              </button>
              <button
                  className={"bg-orange-500 active:bg-orange-600 p-3 m-5 rounded-md drop-shadow-lg shadow-black duration-200"}
                  onClick={() => {
                      scrollToBottom()
                  }}>Contact Us
              </button>
          </div>

          <dialog open={modal} className={"absolute w-full h-full top-0 bg-gray-900/60"}>
              <iframe ref={bookOnlineRef} className={"z-10 w-full h-full absolute top-0"}
                      src={"https://book.housecallpro.com/book/Empire-Electric/d6be251fe2034c498bd1db3a19293fbb?v2=true"}/>
          </dialog>
      </div>
  );
}

export default Header;
