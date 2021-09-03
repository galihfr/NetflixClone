import './home.scss'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured/>                   
            <List titleSection="Continue Watching"/> 
            <List titleSection="Trending Now"/> 
        </div>
    )
}

export default Home
