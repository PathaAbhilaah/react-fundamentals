
import './App.css'

function Header() {

  return (
    <>
    <div className='headerContainer'>
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlYHXNv4EXlQ3RRgvJDU-jD42fTvTIkcmoQ&s" className='logo' alt="Logo image" /></div>
      <div className='pageNamesContainer'>
        <span className='containerItem'>Home</span>
        <span className='containerItem'>About</span>
        <span className='containerItem'>Details</span>
        <span className='containerItem'>Help</span>
        <span className='containerItem'>Support</span>
      </div>
    </div>
    </>
  )
}

export default Header
