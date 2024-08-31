import Services from "./Services";
import DiscoverMore from "./DiscoverMore";
import Navbar from './Navbar';

function Home(props) {

    return (
      <div className="mb-5">
            <Navbar/>
            <Services/>
            <DiscoverMore/>
      </div>
    );
  }
  
  export default Home;
  