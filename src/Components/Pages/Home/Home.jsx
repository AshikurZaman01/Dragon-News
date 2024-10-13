import LeftSideNav from "../LeftSide/LeftSideNav";
import RightSideNav from "../RightSide/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>

            <BreakingNews></BreakingNews>

            <Navbar></Navbar>

            this is home

            <div className="grid grid-cols-1 lg:grid-cols-4  gap-6 ">

                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2">
                    Main
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default Home;