import './App.css';
import Contador from './components/Contador'
import Contador2 from './components/Contador2'
import Contador3 from './components/Contador3'

function App() {
  return (
    <div className="App">

      <Contador3 chuchu="Contador: Limite máximo de 10 e Limite mínimo de 0" numero={0} limiteMaximo={10} limiteMinimo={0} />
      <Contador2 inicial={100} passo={10}/>
      <Contador abobrinha="Contador: 1 em 1. Limite inferior de zero" />
    </div>
  );
}

export default App;
