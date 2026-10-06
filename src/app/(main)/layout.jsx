import Footer from "../component/Shared/Footer/Footer";
import Navbar from "../component/Shared/Navbar/Navbar";

const mainLayout = ({ children }) => {
    return (
        <div>
            <main>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </main>
        </div>
    );
};

export default mainLayout;