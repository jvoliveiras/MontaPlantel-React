import './Jogador.css'

const Jogador = (props) => {
    return (
        <div className='jogador'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img src={props.imagem} alt='Foto do jogador'></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>({props.time})</h5>
                <h5>{props.posicao}</h5>
            </div>
        </div>
    )
}

export default Jogador