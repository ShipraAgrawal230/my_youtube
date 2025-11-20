import React from "react";
import ReactDOM from 'react-dom/client'
import Head from "./components/Head";
import Body from "./components/Body";

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
root.render(<App />)