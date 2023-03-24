
import ReactDom from 'react-dom/client'

import App from './App.jsx'

////where to append or run the whole project 
const root = ReactDom.createRoot(document.getElementById('root'))


///what to be shown or render or load or append into root div
root.render(<App />)