import {useState} from "react"
function NotesForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState(""); 

    const handleTextChange = (e) => {
      
      if(text === ""){
        setBtnDisabled(true)
        setMessage(null)
      }

      else if (text !== null && text.trim().length <= 10){
        setBtnDisabled(true)
        setMessage("6969696969")
      }

      else {

        setMessage(null)
        setBtnDisabled(false);
      }

      setText(e.target.value)
    }

  return (   
    <div>
        <form>
            <h2>Rate your note</h2>  
            <input onChange={handleTextChange} type="text" placeholder="Write a note" />
            <button disabled={btnDisabled} type="Submit"> Send</button>

            {message && <div> {message} </div> }
        </form>
    </div>
  )
}

export default NotesForm 