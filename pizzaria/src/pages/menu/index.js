import './index.scss'
import '../../common/common.scss'
import logo from "../../images/logo-header.png"
import pizzaum from "../../images/4queijos.png"
import pizzadois from "../../images/alho.png"
import pizzatres from "../../images/alema.png"
import pizzaquatro from "../../images/bacon.png"
import pizzacinco from "../../images/pepperoni.png"
import pizzaseis from "../../images/doce.png"
import pizzasete from "../../images/apimentada.png"
import pizzaoito from "../../images/frango.png"
import pizzanove from "../../images/catupiresa-nova.png"
import pizzadez from "../../images/atum.png"
import pizzaonze from "../../images/pizzamm.png"
import pizzadoze from "../../images/doce-de-leite-com-banana.png"
import pizzatreze from "../../images/bananabranco.png"
import pizzaquatorze from "../../images/cheesecake.png"
import pizzaquinze from "../../images/chocolatebacon.png"
import pizzadezseis from "../../images/portuguesa.png"
import pizzadezsete from "../../images/lombiry.png"
import pizzadezoito from "../../images/palmito.png"
import Rodape from '../../components/footer'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function Menu() {

    const ref = useRef();
    const Navigate = useNavigate();

    function sairHome() {
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Leanding');
        }, 1000);
    }

    function sairAdm() {
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Login');
        }, 1000);
    }

    Storage.remove('usuario-logado')

    return (
        <main className='Menu-Page'>
            <LoadingBar color='#6B5B40' ref={ref} />
            <header>
                <nav>
                    <a onClick={sairHome} href='#'> <img class="logo" src={logo} alt="Logo Quickly" width="110px" /></a>
                </nav>
                <div class="nav-header">
                    <nav>
                        <a class="a-header" onClick={sairHome} >Home</a>
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
                        <img src={pizzaoito} className="pizza"></img>

                        <p className='sabor'> Pizza de Frango com Catupiry</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Frango desfiado, Caturpiry original e Manjericão</p>

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
                <div className="cards">

                    <div className="card1">
                        <img src={pizzasete} className="pizza"></img>

                        <p className='sabor'> Pizza de Calabresa</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Calabresa, Cebola e Azeitonas fatiadas</p>

                        <div className="precos"><p className="preco"> R$ 49,90</p></div>
                    </div>

                    <div className="card1">
                        <img src={pizzanove} className="pizza"></img>

                        <p className='sabor'> Pizza Catupiresa</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Calabresa, Catupiry original, Mussarela e Orégano</p>

                        <div className="precos"><p className="preco"> R$ 49,90</p></div>
                    </div>


                    <div className="card1">
                        <img src={pizzadez} className="pizza"></img>

                        <p className='sabor'> Pizza de Atum</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Mussarela, Atum, Orégano e Azeitonas fatiadas</p>

                        <div className="precos"><p className="preco"> R$ 49,90</p></div>
                    </div>
                </div>

                <div className="cards">

                    <div className="card1">
                        <img src={pizzadezseis} className="pizza"></img>

                        <p className='sabor'> Pizza Potuguesa</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Mussarela, Presunto, Azeitona Preta, Ovos Cozidos, Cebola e Orégano.</p>

                        <div className="precos"><p className="preco"> R$ 49,90</p></div>
                    </div>

                    <div className="card1">
                        <img src={pizzadezsete} className="pizza"></img>

                        <p className='sabor'> Pizza Lombiry</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Mussarela, Lombo Canadense, Catupiry original e Orégano.</p>

                        <div className="precos"><p className="preco"> R$ 49,90</p></div>
                    </div>


                    <div className="card1">
                        <img src={pizzadezoito} className="pizza"></img>

                        <p className='sabor'> Pizza de Palmito</p>

                        <hr className='linha'></hr>

                        <p className="ings">Mussarela, Palmito, Azeitona Verde e Orégano.</p>

                        <div className="precos"><p className="preco"> R$ 49,90</p></div>
                    </div>
                </div>

                <div className="cards">

                    <div className="card1">
                        <img src={pizzaseis} className="pizza"></img>

                        <p className='sabor'> Pizza de Chocolate com Morangos</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Chocolate ao leite e morangos fatiados</p>

                        <div className="precos"><p className="preco"> R$ 59,90</p></div>
                    </div>

                    <div className="card1">
                        <img src={pizzaonze} className="pizza"></img>

                        <p className='sabor'> Pizza de M&M´s</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Lascas de Chocolate Meio Amargo e Creme de leite com M&M´s </p>

                        <div className="precos"><p className="preco"> R$ 59,90</p></div>
                    </div>


                    <div className="card1">
                        <img src={pizzadoze} className="pizza"></img>

                        <p className='sabor'> Pizza de Doce de leite com Banana</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Mussarela, Banana Fatiada, Açúcar, Canela e Doce de leite</p>

                        <div className="precos"><p className="preco"> R$ 59,90</p></div>
                    </div>
                </div>

                <div className="cards">

                    <div className="card1">
                        <img src={pizzatreze} className="pizza"></img>

                        <p className='sabor'> Pizza de Banana com Chocolate Branco</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Mussarela, Banana e Chocolate Branco Caramelizado.</p>

                        <div className="precos"><p className="preco"> R$ 59,90</p></div>
                    </div>

                    <div className="card1">
                        <img src={pizzaquatorze} className="pizza"></img>

                        <p className='sabor'> Pizza de Cheesecake</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Cream Cheese, Chocolate Branco Caramelizado, Calda de Frutas Vermelhas.</p>

                        <div className="precos"><p className="preco"> R$ 59,90</p></div>
                    </div>


                    <div className="card1">
                        <img src={pizzaquinze} className="pizza"></img>

                        <p className='sabor'> Pizza de Chocolate Branco com Bacon</p>

                        <hr className='linha'></hr>

                        <p className="ings"> Creme de Leite, Chocolate Branco e Bacon.</p>

                        <div className="precos"><p className="preco"> R$ 59,90</p></div>
                    </div>
                </div>

            </section>
            <footer>
                <Rodape />
            </footer>
        </main>

    );
}