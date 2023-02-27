import { BrowserRouter} from 'react-router-dom'

import ContentComponent from '../Components/Content/ContentComponent'

import MenuComponent from '../Components/Menu/MenuComponent'

function App() {

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
