  import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
    import logo from "../logo.svg"
    import { routes } from "./routes";



  export const Navigation = () => {

    const activeClass = ( isActive: boolean ) => {
        return isActive ? "nav-active" : ""
    }

  return (
    <Suspense fallback={<span>Loading..</span>}>
      <BrowserRouter>
          <div className="main-layout">
              <nav>
                  <img src={ logo } alt="React Logo" />
              <ul>
                {
                  routes.map( link => {
                    return (
                        <li key={link.to}>
                            <NavLink 
                              to={link.to} 
                              className={( {isActive} ) => activeClass(isActive)}
                              >{link.name}
                              </NavLink>
                        </li>
                    )
                  })
                }
              </ul>
              </nav>
              <Routes>
                {
                  routes.map( route => {
                    return (
                      <Route
                        key={route.path}
                        path={route.path} 
                        element={<route.Component/>} 
                      />
                    )
                  })
                }
              <Route path="/*" element={ <Navigate to={routes[0].to} replace />}/>
              </Routes>
          </div>
      </BrowserRouter>
    </Suspense>
  )
}
