import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteData from "./data/NoteData"

function App () {

    const [note, setNote] = useState (NoteData);

    function deleteNote (id) {
        if (window.confirm("are you sure you want to delete?")){
       setNote( note.filter((item)=> item.id!== id));
        }
    }

    return (
    <>
        <Header />   
        <div>
            <NotesList 
                note = {note}
                handleDelete = {deleteNote}
                />
        </div>
    </>    
    )
}

export default App; 