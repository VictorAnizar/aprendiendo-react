import '../App.css';
import '../styles.css';

import Header from './Header';
import Footer from './Footer';
import ContentMain from './ContentMain'
import TodoList from './TodoList';
import { Component } from 'react';


class App extends Component {
  render(){
    return (
      <div className="layout">
        
        <Header border={"white"}/>
        <ContentMain/>
        {/* Si una etiqueta no tiene hijos, se coloca como la siguiente, 
        en caso contrario: se debe cerrar como una etiqueta normal de html */}
        <TodoList/>
        <Footer year={2021} >Pie</Footer>
      </div>
    );
  
  }
  
}

export default App;
