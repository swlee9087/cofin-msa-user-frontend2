//pages 
export {default as LoginPage} from './pages/LoginPage'
export {default as UserPage} from './pages/UserPage'

//components
export {default as UserJoin} from './components/UserJoin'
export {default as UserLogin} from './components/UserLogin'
export {default as UserLost} from './components/UserLost'
// export {default as Logout} from './components/Logout'
export {default as UserInfo} from './components/UserInfo'
export {default as Unregister} from './components/Unregister'

import axios from 'axios';
const server = 'http://127.0.0.1:8000'
const header = {'Content-Type':'application/json'}
export const connect =()=>axios.get(`${server}/api/connect`)