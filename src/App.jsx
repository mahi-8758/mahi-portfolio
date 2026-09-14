import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import AboutPage from "./components/pages/AboutPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import AllProjectsPage from "./components/pages/AllProjectsPage"
import AllTechsPage from "./components/pages/AllTechsPage"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#0b0f17] dark:text-white transition-colors duration-500">
        <ParticlesBackground />
        <SocialLinks />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/about-me" element={<AboutPage />}/>

          <Route path="/projects" element={<AllProjectsPage />}/>

          <Route path="/technologies" element={<AllTechsPage />}/>

        </Routes>

        <GeneralFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
