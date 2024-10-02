import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (e) => {
        e.preventDefault();

        let zonaAtuacao;

        switch(posicao) {
            case 'Goleiro':
                zonaAtuacao = 'Goleiros'
                break
            case 'Lateral Esq.':
                zonaAtuacao = 'Defensores'
                break
            case 'Lateral Dir.':
                zonaAtuacao = 'Defensores'
                break
            case 'Zagueiro':
                zonaAtuacao = 'Defensores'
                break
            case 'Volante':
                zonaAtuacao = 'Meio-Campos'
                break
            case 'Meio Campo':
                zonaAtuacao = 'Meio-Campos'
                break
            case 'Ponta Esq.':
                zonaAtuacao = 'Atacantes'
                break
            case 'Centroavante':
                zonaAtuacao = 'Atacantes'
                break
            case 'Ponta Dir.':
                zonaAtuacao = 'Atacantes'
                break
        }

        let novoJogador = {
            nome,
            posicao,
            zonaAtuacao,
            imagem,
            time
        }

        props.criaCard(novoJogador)

        setNome('')
        setPosicao('')
        setImagem('')
        setTime('')

        let salvaJogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
        salvaJogadores = [...salvaJogadores, novoJogador]

        localStorage.setItem('jogadores', JSON.stringify(salvaJogadores))
    }

    return (
        <section className='formulario'>
            <form onSubmit={salvar}>
                <h2>Preencha os campos para criar um card de um jogador</h2>

                <CampoTexto 
                    required={true} 
                    label="Jogador" 
                    placeholder="Digite o nome do jogador" 
                    aoAlterado={valor => setNome(valor)}
                    valor={nome}
                />

                <ListaSuspensa 
                    required={true} 
                    label="Posição" 
                    itens={props.posicoes}
                    aoAlterado={valor => setPosicao(valor)}
                    valor={posicao}
                />

                <CampoTexto 
                    required={true} 
                    label="Time" 
                    placeholder="Digite o time que o jogador se destacou" 
                    aoAlterado={valor => setTime(valor)}
                    valor={time}
                />

                <CampoTexto 
                    required={true} 
                    label="Foto do Jogador" 
                    placeholder="Digite o caminho da foto do jogador"
                    aoAlterado={valor => setImagem(valor)}
                    valor={imagem}
                />  

                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario