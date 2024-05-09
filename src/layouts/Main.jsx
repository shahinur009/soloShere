import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-306px)]">
            <Outlet></Outlet>
            </div>
            <Footer />
        </>
    );
};

export default Main;