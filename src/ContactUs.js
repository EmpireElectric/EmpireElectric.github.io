import SocialMedia from './SocialMedia'
import GetInTouch from './GetInTouch'
import Navbar from './Navbar';

function Home(props) {

    return (
      <div>
        <Navbar/>
        <div className={"animate-fadein"}>
            <SocialMedia/>
            <GetInTouch/>
        </div>
      </div>
    );
  }
  
  export default Home;
  