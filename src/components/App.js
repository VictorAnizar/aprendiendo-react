import React from 'react';
import '../App.css';
import '../styles.css';

import Header from './Header';
import Footer from './Footer';
import ContentMain from './ContentMain'
import TodoList from './TodoList';
import Form from './Form';

class App extends React.Component {
  render(){
    return (
      <div className="layout">
        
        <Header border={"white"}/>
        <ContentMain className="content"/>
        {/* Si una etiqueta no tiene hijos, se coloca como la siguiente, 
        en caso contrario: se debe cerrar como una etiqueta normal de html */}
        <TodoList className="content"/>
        <Form className="content"/>
        <Footer year={2021} >Pie</Footer>
      </div>
    );
  
  }
  
}

export default App;
