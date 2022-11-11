function NotesItem( {item , handleDelete}) {
  return (
    <div>
        <div>{item.rating}</div> 
        <button onClick={() => handleDelete (item.id)}>
          click
        </button> 
        <div> {item.text} </div>
    </div>
  )
}

export default NotesItem