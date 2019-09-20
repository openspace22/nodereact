import React ,{ Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import Router from './Router'
class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <Router />
                <Link 
                    to='/page1'
                >Page 1</Link>
                <Link
                    to='/about'
                >About Us</Link>
                <Link
                    to='/about/content'
                >About Us Content</Link>
            </BrowserRouter>
        )
    }
}
export default App;