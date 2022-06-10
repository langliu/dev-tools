import { FC } from 'react'

import Router from './router'
import './App.css'

const App:FC = () => {
  return (
    <div className={ 'app' }>
      <Router />
    </div>
  )
}

export default App
