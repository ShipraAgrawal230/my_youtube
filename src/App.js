import React from "react";
import ReactDOM from 'react-dom/client'
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
    return (
        <div>
            <Head />
            <Body/>
        </div>
    )
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Provider store={appStore}><App /></Provider>)