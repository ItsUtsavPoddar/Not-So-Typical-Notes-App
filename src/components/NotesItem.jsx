import { useState } from "react";


function NotesItem() {

    const [priority, setPriority] = useState(69)
    const [text, setText] = useState("Damn that 69 at 4:20")

  return (
    <div>
        <div>{priority}</div> 
        <div> {text} </div>
    </div>
  )
}

export default NotesItem