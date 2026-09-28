import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MessageProvider from './context/MessageContext.jsx'
const MessageContext=createContext()
createRoot(document.getElementById('root')).render(
//   <MessageContext.Provider value={['Hiii',10,'Hello']}>
// <App />
//   </MessageContext.Provider>
    <MessageProvider>
      <App/>
      </MessageProvider>
)
// export {MessageContext};
