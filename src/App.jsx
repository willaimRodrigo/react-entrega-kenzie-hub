import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes/RouterMain";

import "react-toastify/dist/ReactToastify.css";
import "./components/styles/index.scss";

function App() {
    

    return (
        <>
            <RouterMain />
            <ToastContainer theme="dark"/>
        </>
    );
}

export default App;
