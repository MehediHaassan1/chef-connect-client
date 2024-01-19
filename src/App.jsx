import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <h1 className="text-3xl text-pacifico underline">Hello world!</h1>
            <Outlet></Outlet>
        </>
    );
}

export default App;
