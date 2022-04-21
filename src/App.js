import React, { useEffect, useState } from "react"

import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NotFound } from "./pages/NotFound"
import { Layout } from "./pages/Layout"
import { PostIdPage } from "./pages/PostIdPage"
import { LoginPage } from "./pages/LoginPage"
import { RequireAuth } from "./hok/RequireAuth"
import { PostEdit } from "./pages/PostEdit"
import { AuthContext, TheamContext } from "./context"
import PostsList from "./pages/PostsList"

function App() {
  const [isAuth, setIsAuth] = useState(false)
  let [theam, setTheam] = useState("white")

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
  }, [])

  return (
    <div className="App" style={{ background: theam }}>
      <TheamContext.Provider value={{ theam, setTheam }}>
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about/" element={<About />}>
                <Route path="contacts" element={<p>+375 (33) 125-45-47</p>} />
                <Route
                  path="team"
                  element={
                    <p>
                      Быков Йомер Михайлович, <br />
                      Романов Филипп Александрович
                    </p>
                  }
                />
              </Route>
              <Route
                path="/about-us/"
                element={<Navigate to="/about" replace />}
              />
              <Route path="/posts" element={<PostsList />} />
              <Route path="/posts/:id" element={<PostIdPage />} />
              <Route
                path="/posts/:id/edit"
                element={
                  <RequireAuth>
                    <PostEdit />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </TheamContext.Provider>
    </div>
  )
}

export default App
