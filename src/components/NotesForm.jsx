import {useState} from "react"
function NotesForm() {
    const [text, setText] = useState("");

  return ( 
    <div>
        <form>
            <h2>Rate your note</h2>  
            <input type="text" placeholder="Write a note" />
            <button type="Submit"> Send</button>
        </form>
    </div>
  )
}

export default NotesForm 