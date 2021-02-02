import React from 'react'
import './App.css';
import Header from "./components/Navbar/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Musik from "./components/Navbar/Musik/Musik";
import Settings from "./components/Navbar/Settings/Settings";
import {Route} from "react-router-dom";
import Frends from "./components/Navbar/Frends/Frends";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import NewsContainer from "./components/Navbar/News/NewsContainer";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";



const App = (props) => {

  return (
      <div className='app-wrapper'>
             <Header/>
             <Navbar/>
             <div className='app-wrapper-content'>
                 <Route path='/profile'
                        render={ () => <ProfileContainer
                            store={props.store} />} />
                 <Route path='/dialogs'
                        render={ () => <DialogsContainer
                            store={props.store} />} />
                 <Route path='/news'
                        render={ () => <NewsContainer
                            store={props.store} />} />
                 <Route path='/musik'
                        render={ () => <Musik
                            store={props.store} />} />

                 <Route path='/settings' component={Settings} />

                 <Route path='/frends'
                        render={ () => <Frends
                            store={props.store}/>} />

                 <Route path='/users'
                        render={ () => <UsersContainer />} />
             </div>
      </div>
      );
}

export default App;
