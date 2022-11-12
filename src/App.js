import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NotesStats from "./components/NotesStats";
import NotesForm from "./components/NotesForm";
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
            <NotesForm />
            <NotesStats note = {note}/>
            <NotesList 
                note = {note}
                handleDelete = {deleteNote}
                />
        </div>
    </>    
    )
}

export default App; 