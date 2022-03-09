import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import LazyPage1 from "../pages/LazyPage1"
import LazyPage2 from "../pages/LazyPage2"
import LazyPage3 from "../pages/LazyPage3"

const LazyLayout = () => {
  return (
    <div>
        <h1> LazyLayout Page </h1>
        <ul>
                <li>
                    <NavLink to="lazypage1"> lazyPage 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazypage2"> lazyPage 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazypage3"> lazyPage 3</NavLink>
                </li>
        </ul>
        <Routes>
            <Route path={"lazypage1"} element={<LazyPage1 />} />
            <Route path={"lazypage2"} element={<LazyPage2 />} />
            <Route path={"lazypage3"} element={<LazyPage3 />} />
            <Route path={"*"} element={ <Navigate to={"lazypage1"} replace />}/>
        </Routes>
    </div>
  )
}

export default LazyLayout