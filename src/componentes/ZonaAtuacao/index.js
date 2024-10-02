import Jogador from '../Jogador'
import './index.css'

const ZonaAtuacao = (props) => {
    return (
        props.jogadores.length > 0 && 
        <section className='zonaAtuacao' style={{ backgroundColor: 'rgb(220, 216, 216)' }} >
            <h3 style={{borderColor: props.corPrimaria}}> {props.zonaAtuacao}</h3>
            
            <div className='jogadores'>
                {props.jogadores.map((jogador, index) => 
                    <Jogador 
                    nome={jogador.nome} 
                    posicao={jogador.posicao}
                    time={jogador.time}
                    imagem={jogador.imagem}
                    key={index}
                    corPrimaria={props.corPrimaria}
                    />) 
                }
            </div>
        </section>
    )
}

export default ZonaAtuacao