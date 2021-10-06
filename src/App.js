import './App.css';
import './styles.css';

import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <div className="layout">
      <Header border={"white"}/>
      <main className="content"></main>
      <Footer year={2021} />
    </div>
  );

}

export default App;
