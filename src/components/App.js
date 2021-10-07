import React from 'react';
import '../App.css';
import '../styles.css';

import Header from './Header';
import Footer from './Footer';
import ContentMain from './ContentMain'
import TodoList from './TodoList';
import Form from './Form';



class App extends React.Component {

  state = { tasks : ["Elem 1", "Elem 2", "Elem 3"] }
  createTareas(content){
    this.setState((prevState)=>({
      tasks: [...prevState.tasks, content]
    }));
  }

  render(){
    return (
      <div className="layout">
        
        <Header border={"white"}/>
        <ContentMain className="content"/>
        {/* Si una etiqueta no tiene hijos, se coloca como la siguiente, 
        en caso contrario: se debe cerrar como una etiqueta normal de html */}
        <TodoList className="content" tasks={this.state.tasks}/>
        <Form className="content" onSubmit={(val)=>this.createTareas(val)}/>
        <Footer year={2021} ></Footer>
      </div>
    );
  
  }
  
}

export default App;
