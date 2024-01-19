import { Outlet } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default App;
