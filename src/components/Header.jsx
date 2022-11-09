function Header({text}) {
  return (
    <header>
        <div>
            <h2> {text} </h2>
            <h4> Your Secret is with you</h4> 
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Notes Notes Notes!"
}

export default Header