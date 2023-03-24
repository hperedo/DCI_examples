import ReactDom from 'react-dom/client'
import App from './App'
import GameContextProvidor from './GameContext'
const root = ReactDom.createRoot(document.getElementById('root'))



root.render(
<GameContextProvidor>
<App/>

</GameContextProvidor>


)