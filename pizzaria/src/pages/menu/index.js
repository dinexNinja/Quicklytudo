import './index.scss'
import '../../common/common.scss'
import logo from "../../images/logo-header.png"
import pizzaum from "../../images/4queijos.png"
import pizzadois from "../../images/alho.png"
import pizzatres from "../../images/alema.png"
import pizzaquatro from "../../images/bacon.png"
import pizzacinco from "../../images/pepperoni.png"
import pizzaseis from "../../images/doce.png"
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

            <hr className="linha1"></hr>
            <div className="cards">
                <div className="card1">
                <img src={pizzaum} className="pizza"></img>

                <p className='sabor'> Pizza Quatro Queijos</p>

                <hr className='linha'></hr>

                <p className="ings"> Queijos Mussarela, Catupiry, Provolone, Parmesão e azeitonas fatiadas</p>

                <div className="precos"><p className="preco"> R$ 49,90</p></div>
            </div>

            <div className="card1">
                <img src={pizzadois} className="pizza"></img>

                <p className='sabor'> Pizza de Alho</p>

                <hr className='linha'></hr>

                <p className="ings"> Alho, Queijos Mussarela e Parmesão, rodelas de Tomate e Azeitonas fatiadas</p>

                <div className="precos"><p className="preco"> R$ 49,90</p></div>
            </div>

            <div className="card1">
                <img src={pizzatres} className="pizza"></img>

                <p className='sabor'> Pizza Alemã</p>

                <hr className='linha'></hr>

                <p className="ings"> Mussarela, Calabresa moída, Cebola, Parmesão e Azeitonas fatiadas</p>

                <div className="precos"><p className="preco"> R$ 49,90</p></div>
            </div>
            </div>

            <div className="cards">
                
            <div className="card1">
                <img src={pizzacinco} className="pizza"></img>

                <p className='sabor'> Pizza de Pepperoni</p>

                <hr className='linha'></hr>

                <p className="ings"> Mussarela, Pepperoni, Champignon e Azeitonas fatiadas</p>

                <div className="precos"><p className="preco"> R$ 49,90</p></div>
            </div>

            <div className="card1">
                <img src={pizzaseis} className="pizza"></img>

                <p className='sabor'> Pizza de Chocolate e Morango</p>

                <hr className='linha'></hr>

                <p className="ings"> Chocolate ao leite e morangos fatiados</p>

                <div className="precos"><p className="preco"> R$ 49,90</p></div>
            </div>

            
            <div className="card1">
                <img src={pizzaquatro} className="pizza"></img>

                <p className='sabor'> Pizza de Bacon</p>

                <hr className='linha'></hr>

                <p className="ings"> Mussarela, Bacon, Ovo e Azeitonas fatiadas</p>

                <div className="precos"><p className="preco"> R$ 49,90</p></div>
            </div>
            </div>
           
        </section>
        <footer>
        <Rodape />
    </footer>
        </main>

    );
}