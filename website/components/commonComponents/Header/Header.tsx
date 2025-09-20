import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <NavBar />
            </div>
            <div className="drawer-side z-[9999] h-full">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="z-[9999] h-full min-h-screen w-[17rem] bg-white dark:bg-dark ">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Header;
