import { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import ZonaAtuacao from './componentes/ZonaAtuacao';

function App() {

  const [jogadores, setJogadores] = useState([])

  useEffect(() => {
    const jogadoresSalvos = localStorage.getItem('jogadores');

    if (jogadoresSalvos) {
      setJogadores(JSON.parse(jogadoresSalvos));
    }
    
  }, []);

  const zonaAtuacao = [
    {
      zonaAtuacao: 'Goleiros',
      corPrimaria: 'purple'
    },
    {
      zonaAtuacao: 'Defensores',
      corPrimaria: 'orange'
    },
    {
      zonaAtuacao: 'Meio-Campos',
      corPrimaria: 'blue'
    },
    {
      zonaAtuacao: 'Atacantes',
      corPrimaria: 'green'
    }
  ]

  const posicoes = [
    'Goleiro',
    'Lateral Esq.',
    'Zagueiro',
    'Lateral Dir.',
    'Volante',
    'Meio Campo',
    'Ponta Esq.',
    'Centroavante',
    'Ponta Dir.'
  ]

  return (
    <div className="App">
      <Banner />

      <h1 style={{textAlign: 'center', color: 'red'}}> Monte o seu plantel dos sonhos</h1>
      
      <Formulario posicoes={posicoes} criaCard={c => setJogadores([...jogadores, c])} />

      {zonaAtuacao.map((p, index) => 
        <ZonaAtuacao 
        key={index}
        zonaAtuacao={p.zonaAtuacao} 
        corPrimaria={p.corPrimaria} 
        jogadores={jogadores.filter(jogador => jogador.zonaAtuacao === p.zonaAtuacao)}
        /> 
      )}

    </div>
  )
}

export default App;
