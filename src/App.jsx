import './App.css'
import Blogs from './Components/Blogs.jsx/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Navbar/Nav'

function App() {
  

  return (
    <>
    <Nav />
    <main className='md:flex'>
    <Blogs/>
    <Bookmarks/>

    </main>
    </>
  )
}

export default App
