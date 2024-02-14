import { CharacterList } from "./components/characterList"; 

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-3 bg-white text-dark fw-bold" >Rick And Morty</h1>
      <CharacterList />
     
    </div>
  );
}


export default App;