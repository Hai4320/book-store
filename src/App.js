import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import QuickBar from './components/QuickBar/QuickBar'


import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import Login from './pages/LoginAndRegister/Login'
import Register from './pages/LoginAndRegister/Register'
import BookDetails from './pages/BookDetails/BookDetails'




function App() {  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <section>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/store' component={Store}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/books/:id' component={BookDetails}/>
          </Switch>
        </section>
       
        <Footer></Footer>
        <QuickBar></QuickBar>
    </Router>
    </div>
    
  );
}

export default App;
