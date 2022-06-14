import './index.scss'
import LoadingBar from 'react-top-loading-bar'
import add from '../../images/adicionar.png'
import confirm from '../../images/verificar.svg'
import cancel from '../../images/cruz.svg'
import edit from '../../images/lapis.svg'
import { useEffect, useState, useRef } from 'react'
import Storage from 'local-storage'
// eslint-disable-next-line
import { useNavigate, Navigate } from 'react-router-dom';
import { novaComanda, listarComanda, listarNome, Deletar, Concluir, listarConcluidas, AlterarComanda } from '../../api/comandaapi'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lupa from '../../images/lupa.svg';
import lupac from '../../images/lupac.png';
import sair from '../../images/exit.png'
import { confirmAlert } from 'react-confirm-alert'; // Import


export default function Adm() {
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [end, setEnd] = useState('')
    const [con, setCon] = useState('')
    const [pedido, setPedido] = useState('')
    const [total, setTotal] = useState('')
    const [comandas, setComandas] = useState([]);
    const [filtro, setFiltro] = useState('');

    const ref = useRef();
    const Navigate = useNavigate();

    async function ConcluirSit(id, nome) {
        confirmAlert({
            title: `Concluir comanda`,
            message: `Deseja Concluir a comanda ${id} ? `,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        // eslint-disable-next-line
                        const resp = await Concluir(id, nome);
                        if (filtro === '') {
                            Listar()
                        }
                        else {
                            Filtrar()
                            toast.dark('Comanda deletada!')
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })

    }

    async function remover(id, nome) {
        confirmAlert({
            title: `Remover comanda`,
            message: `Deseja remover a comanda ${id} permanentemente? `,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        // eslint-disable-next-line
                        const resp = await Deletar(id, nome);
                        if (filtro === '') {
                            Listar()
                        }
                        else {
                            Filtrar()
                            toast.dark('Comanda deletada!')
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })

    }


    async function Listar() {
        const resp = await listarComanda();
        setComandas(resp);
    }

    async function listarConc() {
        const resp = await listarConcluidas();
        setComandas(resp);
    }

    useEffect(() => {
        Listar();
    }, [])

    async function Filtrar() {
        const resp = await listarNome(filtro);
        setComandas(resp)
    }

    async function Salvar() {
        try {
            let r;
            if (id === 0)
               r = await novaComanda(nome, end, con, pedido, total);
            else 
               r = await AlterarComanda(id, nome, end, con, pedido, total);
            toast.success('Comanda salva!');
            hideModal();
            Listar();
           
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    useEffect(() => {
        if (!Storage('usuario-logado')) {
            Navigate('/Login')
        }
    }, [])

    function sairPag(){
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Login');
        }, 1000);

    }
    
    
    function limpar() {
        setNome('');
        setEnd('');
        setCon('');
        setPedido('');
        setTotal(0);
        setId(0);
    }

    function alterar(item) {
        setNome(item.nome);
        setEnd(item.endereco);
        setCon(item.contato);
        setPedido(item.pedido);
        setTotal(item.total);
        setId(item.id);

        showModal();
    }

    function showModal() {
        var element = document.getElementById("modal");
        element.classList.add("show-modal");
    }
    function hideModal() {
        var element = document.getElementById("modal");
        element.classList.remove("show-modal");

        limpar();
    }
    return (
        <div className='Adm-Page'>
            <LoadingBar color='#f8f8f847' ref={ref} />
            <main>
                    <div className='voltar'><a onClick={sairPag}><img className='iconsair' src={sair} width={30} height={30} /></a></div>
                    <div className='busca'>
                        <input className='input-busca' type="text" placeholder='Pesquisar comandas...' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src={lupa} onClick={Filtrar} className='lupa' />
                        <img src={lupac} onClick={listarConc} className='lupa' />
                    </div>
                

                <section>
                    {comandas.map(item =>

                        <div className='card'>
                            <div className='div-comanda-ex'>
                                <div className='div-h1-comanda'> <h1 className='h1-comanda-ex'>Comanda {item.id}</h1></div>
                                <h3 className='h3-comanda-ex' >Nome:</h3>
                                <h3 className='h3-comanda-ex' style={{ color: "#3d3d3d" }}>{item.nome}</h3>
                                <h3 className='h3-comanda-ex' >Endereço:</h3>
                                <h3 className='h3-comanda-ex' style={{ color: "#3d3d3d" }}>{item.endereco}</h3>
                                <h3 className='h3-comanda-ex' >Numero:</h3>
                                <h3 className='h3-comanda-ex' style={{ color: "#3d3d3d" }}>{item.contato}</h3>
                                <h3 className='h3-comanda-ex' >Pedido:</h3>
                                <h3 className='h3-comanda-ex' style={{ color: "#3d3d3d" }}>{item.pedido}</h3>
                                <h3 className='h3-comanda-ex' >Total:</h3>
                                <h3 className='h3-comanda-ex' style={{ color: "#3d3d3d" }}>{item.total}</h3>
                                <h3 className='h3-comanda-ex' >Situação:</h3>
                                <h3 className='h3-comanda-ex' style={{ color: "#00A000" }}>{item.situacao}</h3>

                                <div className='icons'>
                                    <img src={edit} alt="Editar" className='img-icon' onClick={() => alterar(item)} />

                                    <img src={confirm} alt="Confirmar" onClick={() => ConcluirSit(item.id, item.nome)} className='img-icon' />

                                    <img src={cancel} onClick={() => remover(item.id, item.nome)} alt="Cancelar" className='img-icon' />

                                </div>
                            </div>
                        </div>
                    )}

                    <div className='card-add' >
                        <button onClick={showModal} class="adicionar"><img class="adicionar-img" src={add} width="60px" height="60px" alt="+" /></button>
                        <div className="modal" id="modal">
                            <div className="modal-content">
                                <div className='exit'><label onClick={hideModal}>x</label></div>
                                <h1 className="h1-comanda">Comanda</h1>

                                <div className="div-comanda">
                                    <h3 className="h3-comanda">Nome</h3>
                                    <input className="txt-comanda" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                                </div>
                                <div className="div-comanda">
                                    <h3 className="h3-comanda">Endereço</h3>
                                    <input className="txt-comanda" type="text" value={end} onChange={e => setEnd(e.target.value)} />
                                </div>
                                <div className="div-comanda">
                                    <h3 className="h3-comanda">Contato</h3>
                                    <input className="txt-comanda" type="tel" value={con} onChange={e => setCon(e.target.value)} />
                                </div>
                                <div className="div-comanda" id="pedido">
                                    <h3 className="h3-comanda">Pedido</h3>
                                    <textarea cols="30" rows="10" value={pedido} onChange={e => setPedido(e.target.value)}></textarea>
                                </div>
                                <div className='final-comanda'>
                                    <div className="final-comanda">
                                        <div className="div-comanda" id="total">
                                            <h3 className="h3-comanda">Total</h3>
                                            <input type="text" class="txt-total" placeholder="R$" value={total} onChange={e => setTotal(e.target.value)} />
                                        </div>
                                    </div>
                                    <div id="botao-comanda">
                                        <button className="concluir" onClick={Salvar}>Concluir</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

        </div>


    );
}