import React from "react";

const Header = () => {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const timeNow = today.toUTCString()

    return (
        <>
            <div>
                <h1 style={{color: "#eee"}}>Tarefas</h1>
                <h5 style={{color: "chartreuse"}}>{timeNow}</h5>
            </div>
        </>
    )
};

export default Header;


