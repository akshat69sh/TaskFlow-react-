import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import SidePanel from './Components/Sections/SidePanel'
import MainSection from './Components/Sections/MainSection'
import TaskList from './Components/Sections/TaskList';

function App() {
  

  return (
    
    <div className='flex ' >
    <SidePanel/>
    {/* doubt */}
    <main className="flex-1  overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/MainSection" replace />} />
          <Route path="/MainSection" element={<MainSection />} />
          <Route path="/TaskList" element={<TaskList />} />
        </Routes>
      </main>
    

    </div>
      
    
  )
}

export default App
