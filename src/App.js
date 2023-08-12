import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
   page=10;
   apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<News apikey={this.apikey}  pageSize={this.page} country="in" category="sports"/>}></Route>
        <Route path='/business'  element={<News apikey={this.apikey}  pageSize={this.page} key='business' country="in" category="business"/>}></Route>
        <Route path='/entertainment' element={<News apikey={this.apikey}   key='entertainment' pageSize={this.page} country="in" category="entertainment"/>}></Route>
        <Route path='/general'  element={<News apikey={this.apikey}  pageSize={this.page} key='general' country="in" category="general"/>}></Route>
        <Route path='/health' element={<News apikey={this.apikey}  pageSize={this.page} key='health' country="in" category="health"/>}></Route>
        <Route path='/science'  element={<News apikey={this.apikey}  pageSize={this.page}  key='science' country="in" category="science"/>}></Route>
        <Route path='/sports' element={<News apikey={this.apikey}  pageSize={this.page} key='sports' country="in" category="sports"/>}></Route>
        <Route path='/technology' element={<News apikey={this.apikey}  pageSize={this.page} key='technology' country="in" category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

