import './index.scss'
import '../../common/common.scss'
import logo from "../../images/logo-header.png"
import pizzaum from "../../images/4queijos.png"
import Rodape from '../../components/footer'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import {useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function Menu() {

    const ref = useRef();
    const Navigate = useNavigate();
    
    function sairHome(){
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Leanding');
        }, 1000);
    }

    function sairAdm(){
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Login');
        }, 1000);
    }
    
    Storage.remove('usuario-logado')

    return(
        <main className='Menu-Page'>
            <LoadingBar color='#6B5B40' ref={ref} />
             <header>
            <nav>
            <a onClick={sairHome} href='#'> <img class="logo" src={logo} alt="Logo Quickly" width="110px" /></a>
            </nav>
            <div class="nav-header">
                <nav>
                    <a  class="a-header" onClick={sairHome} >Home</a>
                </nav>
                <nav>
                    <a onClick={sairAdm} class="a-header" >Adm</a> 
                </nav>
            </div>
        </header>
        <section className="fundo">
            <h1 className='titulo'> Menu</h1>

            <div className="cards">
                <div className="card1">
                <img src={pizzaum} className="pizza"></img>

                <p className='sabor'> Pizza Quatro Queijos</p>

                <hr className='linha'></hr>

                <p className="ings"> Queijo Requeijão, Parmesão, Gorgonzola, Mussarela</p>

                <p className="preco"> R$ 59,90</p>
            </div>

            <div className="card1">
                <img src={pizzaum} className="pizza"></img>
            </div>

            <div className="card1">
                <img src={pizzaum} className="pizza"></img>
            </div>
            </div>
           
        </section>
        <footer>
        <Rodape />
    </footer>
        </main>

    );
}