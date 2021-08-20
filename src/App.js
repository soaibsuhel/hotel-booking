import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import PrivateRoute from "./PrivateRoute";
import Navigation from './components/Navigation';

import Service from './components/service';

import BedRoom from './components/BedRoomPage';
import BelcuniRoom from './components/BelcuniRoomPage';
import AttachBathRoom from './components/AttatchBathRoomPage';

import Feedbacks from './components/Feedbacks';
import FirebaseData from './components/FeedbackData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/service" component={Service} />
          <PrivateRoute exact path="/service/bedroom" component={BedRoom} />
          <PrivateRoute exact path="/service/belcuniroom" component={BelcuniRoom} />
          <PrivateRoute exact path="service/attatchbathroom" component={AttachBathRoom} />
          <PrivateRoute exact path="/order" component={Feedbacks} />
          <PrivateRoute exact path="/userfeedback" component={FirebaseData} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
