import React from 'react'
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';
import './styles/app.css';

function App() {
  return (
     <div className="w-396 min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center p-6">
    <div className="flex flex-col items-center space-y-6 w-full max-w-lg">
      <Header/>
      <Profile/>
      <Counter/>
    </div>
    </div>
  )
}

export default App
