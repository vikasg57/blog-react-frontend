import logo from './logo.svg';
import './App.css';
import {Routehandler} from './router/routerhandler'
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Button } from '@mui/material';


function App() {

  return (
    <div className="App"> 
    <NotificationContainer/>
    <Routehandler/>
    </div>
  );
}

export default App;
