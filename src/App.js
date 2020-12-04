import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Musik from "./components/Navbar/Musik/Musik";
import Settings from "./components/Navbar/Settings/Settings";
import {Route} from "react-router-dom";
import Frends from "./components/Navbar/Frends/Frends";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import NewsContainer from "./components/Navbar/News/NewsContainer";


const App = (props) => {

  return (
      <div className='app-wrapper'>
             <Header/>
             <Navbar/>
             <div className='app-wrapper-content'>
                 <Route path='/profile'
                        render={ () => <Profile
                            store={props.store} />} />
                 <Route path='/dialogs'
                        render={ () => <DialogsContainer
                            store={props.store} />} />
                 <Route path='/news'
                        render={ () => <NewsContainer
                            store={props.store}
                            /*state={props.state.newsPage}
                            dispatch={props.dispatch}*/ />} />
                 <Route path='/musik'
                        render={ () => <Musik
                            state={props.state.musikPage} />} />

                 <Route path='/settings' component={Settings} />

                 <Route path='/frends'
                        render={ () => <Frends
                            state={props.state.frendsPage}/>} />
             </div>
      </div>
      );
}

export default App;
