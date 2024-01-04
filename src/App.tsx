import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Article from './components/Article';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error } from './components/Error';

// function Header(){
//   // 보통은 따로 components로 뺀다.
//   return (
//     <div>
//       <header>
//         <h1><a href='/'>WEB</a></h1>
//       </header>
//     </div>
//   )
// }
function App() {
  return (
    <div className="App">
      <Header title="안녕하세요" onTest={function(){alert(1)}}></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      <Article></Article>
      Hello WEB
    </div>
  );
}
// cbd 개발방식(component based dev.)
export default App;
