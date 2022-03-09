  import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
  import * as lazyload from "../01-lazyload/pages"
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
                    <NavLink to="/lazy1" className={( {isActive} ) => activeClass(isActive)}>Home</NavLink>
                </li>
                 <li>
                    <NavLink to="/lazy2" className={( {isActive} ) => activeClass(isActive)}>About</NavLink>
                </li>
                 <li>
                    <NavLink to="/lazy3" className={( {isActive} ) => activeClass(isActive)}>Users</NavLink>
                </li>
            </ul>
            </nav>
            <Routes>
                <Route path="lazy1" element={<lazyload.LazyPage1 />} />
                <Route path="lazy2" element={ <lazyload.LazyPage2 />} />
                <Route path="lazy3" element={<lazyload.LazyPage3 />} />
                 <Route path="/*" element={ <Navigate to="/lazy1" replace />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
