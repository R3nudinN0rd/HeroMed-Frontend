import { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import ContentComponent from '../Components/Content/ContentComponent'
import HeaderComponent from '../Components/Header/HeaderComponent'

import TeamsTemplate from '../assets/teams.png'
import MenuComponent from '../Components/Menu/MenuComponent'

function App() {
  const [teamsOff, setTeamsOff] = useState(true)

  return (
    <BrowserRouter>
      <div className='flex justify-center w-full h-full'>
        <MenuComponent />
        <ContentComponent />
      </div>
    </BrowserRouter>
  )
}

export default App
