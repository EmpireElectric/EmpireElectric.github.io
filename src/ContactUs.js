import SocialMedia from './SocialMedia'
import GetInTouch from './GetInTouch'
import Navbar from './Navbar';

function Home(props) {

    return (
      <div>
        <Navbar/>
        <div className={"animate-fadein flex flex-wrap-reverse sm:flex-wrap justify-center"}>
            <SocialMedia/>
            <GetInTouch/>
        </div>
      </div>
    );
  }
  
  export default Home;
  