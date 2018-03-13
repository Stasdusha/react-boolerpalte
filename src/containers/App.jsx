import React from 'react'
import ModalWindow from 'components/shared/ModalWindow'


const App = ({ children }) => (
  <div>
    { children }
    <ModalWindow />
  </div>
)

export default App
