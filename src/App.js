import { useState } from "react";
import Header from "./components/Header";
import NotesItem from "./components/NotesItem";

function app () {

    const [note, setNote] = useState()
 

    return (
    <>
        <Header />
        <div>
            <NotesItem / >
        </div>
    </>    
    )
}

export default app; 