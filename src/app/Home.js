import HeroSection from "./sections/HeroSection";
import Separation from "./components/Separation";
import Collab from "./sections/Collab";
import Service from "./sections/Service";
import Process from "./sections/Process";
const Home = () => {
    return (
        <div>
            <HeroSection />
            <Separation />
            <Collab />
            <Separation />
            <Service />
            <Process />
        </div>
    )
}

export default Home
