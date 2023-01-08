import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import About from '../About/About.jsx'
import Home from '../Home/Home.jsx'
import Page404 from '../Page404/Page404.jsx'

export default function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="h-screen flex-1 p-7">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="*" element={<Page404 />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
