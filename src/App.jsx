import React, { useEffect } from "react";
import Nav from "./components/Nav";
import MainRouter from "./Routes/MainRouter";


const App = () => {
    return (
        <div className="w-[80%] m-auto ">
            <Nav />
            <MainRouter/>            
        </div>
    );
};

export default App;
