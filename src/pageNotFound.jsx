import React, { Component } from 'react'
import style from "./pageNotFound.module.css"

class PageNotFound extends Component {
    state = {  }
    render() { 
        return ( <section className='vh-100 d-flex justify-content-center align-items-center'>
           <h1 className={`text-center ${style.bigFont}`}>404 page</h1> 
        </section> );
    }
}
 
export default PageNotFound;