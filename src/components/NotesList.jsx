import NotesItem from "./NotesItem"

function NotesList({note , handleDelete}) {

    if (!note){

        return ( <p>
            No Notes yet.
        </p>
        )
    }

  return (
    <div>
    { note.map( (item) =>{
     return (
     <NotesItem 
      key={item.id} 
      item={item} 
      handleDelete = {handleDelete} />)
      })
    }
    </div>
  )
}

export default NotesList