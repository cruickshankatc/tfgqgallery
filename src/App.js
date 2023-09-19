import logo from './logo.svg';
import './App.css';
import CharacterIcons from "./components/CharacterIcons.js"
import ViewScreen from "./components/ViewScreen.js"
import data from "./data.js"

function App() {
  const useData = data.map(item => {
      return (
        <CharacterIcons 
          image={item.image}
          name={item.name}
        />
      )
  })
  
  return (
    <div>
      <section id="background-section"></section>
      <section className="main">
        <div className="icons">
          {useData}
        </div>
        <ViewScreen />
      </section>
    </div>
  );
}

export default App;
