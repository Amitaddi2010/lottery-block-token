import './Navbar.css'

function Navbar({handler}) {
  return (
    <nav className='nav'>
      <button onClick={()=>handler(2)}>Swap</button>
      <button onClick={()=>handler(1)}>Lottery</button>
    </nav>
  )
}

export default Navbar