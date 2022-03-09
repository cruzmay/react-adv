  import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
    import logo from "../logo.svg"
  
  export const Navigation = () => {

    const activeClass = ( isActive: boolean ) => {
        return isActive ? "nav-active" : ""
    }

  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />
            <ul>
                <li>
                    <NavLink to="/" className={( {isActive} ) => activeClass(isActive)}>Home</NavLink>
                </li>
                 <li>
                    <NavLink to="/about" className={( {isActive} ) => activeClass(isActive)}>About</NavLink>
                </li>
                 <li>
                    <NavLink to="/users" className={( {isActive} ) => activeClass(isActive)}>Users</NavLink>
                </li>
            </ul>
            </nav>
            <Routes>
                <Route path="about" element={<h1>about</h1>} />
                <Route path="users" element={ <h1>Users</h1>} />
                <Route path="/" element={<h1>home</h1>} />
                 <Route path="/*" element={<h1>no se encontro la ruta</h1>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
