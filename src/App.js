import './App.css';
import './styles.css';


const ElFooter = (props)=>(<footer>What a such footer! <span>{props.year}</span></footer>)

const ElHeader = ()=>(<header>The amazing header!</header>)


function App() {
  return (
    <div className="layout">
      <ElHeader/>
      <main className="content"></main>
      <ElFooter year={2021}/>
    </div>
  );
  
}

export default App;
