import Banner from "../../components/Banner";
import HowItWorks from "./HowItWorks";
import RunningCampaigns from "./RunningCampaigns";
import Testimonials from "./Testimonials";

const HomePage = () => {
    return (
        <div>
            <Banner />

            <RunningCampaigns />
            <HowItWorks />
            <Testimonials />
        </div>
    );
};

export default HomePage;
