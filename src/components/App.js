import React from 'react';
import '../App.css';
import '../styles.css';

import Header from './Header';
import Footer from './Footer';
import ContentMain from './ContentMain'




class App extends React.Component {
  
  //lo que se va a renderizar de la app
  render(){
    return (
      //container principal
      <div className="layout">
        {/* Header de la app */}
        <Header border={"white"}/>
        {/* Donde va a estar el contenido de la pagina */}
        <ContentMain />
        {/* Si una etiqueta no tiene hijos, se coloca como la siguiente, 
        en caso contrario: se debe cerrar como una etiqueta normal de html */}
        {/* Pie de pagina */}
        <Footer year={2021} ></Footer>
      </div>
    );
  
  }
  
}

export default App;
