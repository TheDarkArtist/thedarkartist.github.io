import { HiAcademicCap } from "react-icons/hi";
import AutoPlayVideo from "../components/AutoPlayVideo";
import TypingEffect from "../components/TypingEffect";


const Home = () => {
  const t = 'This is kushagra'
  return (
    <div className="h-[100vh]">
      <HiAcademicCap className="h-10 w-10" />
      <p>Hey,</p>
      <p>This is kushagra</p> 
        <AutoPlayVideo />
    </div>
  );
};

export default Home;
