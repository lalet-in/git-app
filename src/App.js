import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import News from "./components/Navbar/News/News";
import Musik from "./components/Navbar/Musik/Musik";
import Settings from "./components/Navbar/Settings/Settings";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import Frends from "./components/Navbar/Frends/Frends";


const App = (props) => {
  return (
      <BrowserRouter>
      <div className='app-wrapper'>
             <Header/>
             <Navbar/>
             <div className='app-wrapper-content'>
                 <Route path='/profile'
                        render={ () => <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}/>} />
                 <Route path='/dialogs'
                        render={ () => <Dialogs
                            state={props.state.dialogsPage}/>} />
                 <Route path='/news'
                        render={ () => <News
                            state={props.state.newsPage}/>} />
                 <Route path='/musik'
                        render={ () => <Musik
                            state={props.state.musikPage}/>} />

                 <Route path='/settings' component={Settings} />

                 <Route path='/frends' r
                        ender={ () => <Frends
                            state={props.state.frendsPage}/>} />
             </div>
      </div>
      </BrowserRouter>);
}

export default App;
