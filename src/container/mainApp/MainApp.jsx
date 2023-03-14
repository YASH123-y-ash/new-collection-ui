import React from 'react'
import Content from '../content/Content'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import '../style/style.css'

const MainApp = () => {
    return (
        <>
            <div className='main-app-container'>
                <Header />
                <Content />
            </div>
        </>
    )
}

export default MainApp