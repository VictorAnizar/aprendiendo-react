import '../App.css';
import '../styles.css';

import Header from './Header';
import Footer from './Footer';
import ContentMain from './ContentMain'



function App() {
  return (
    <div className="layout">
      
      <Header border={"white"}/>
      <ContentMain/>
      <Footer year={2021} />
    </div>
  );

}

export default App;
