import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedSection/Header/Header";
import Footer from "../Pages/SharedSection/Footer/Footer";

const Root = () => {
    return (
        <div className="relative">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;