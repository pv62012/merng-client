import {BrowserRouter, Route} from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MenuBar from './components/MenuBar';
import { AuthProvider } from './context/auth';
import Home from './Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './util/AuthRoute';
import SinglePost from './pages/SinglePost'
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/posts/:postId" component={SinglePost}/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
