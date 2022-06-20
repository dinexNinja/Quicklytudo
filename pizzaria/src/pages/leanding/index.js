import './index.scss'
import logo from '../../images/logo-header.png'
import Ifood from '../../images/ifood.png'
import Rappi from '../../images/rappi.png'
import Uber from '../../images/ubereats.png'
import Queijo from '../../images/4queijos.png'
import Pepperoni from '../../images/pepperoni.png'
import Alema from '../../images/alema.png'
import Bacon from '../../images/bacon.png'
import Alho from '../../images/alho.png'
import Doce from '../../images/doce.png'
import Email from '../../images/email.png'
import Whats from '../../images/wpp.png'
import Instagram from '../../images/instagram.png'
import divider from '../../images/zyro-imagedivider.png'
import { Link} from "react-router-dom"
import Rodape from '../../components/footer'
import Storage from 'local-storage'

import { useNavigate } from 'react-router-dom'
import {useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'








export default function Leanding() {

    const ref = useRef();
    const Navigate = useNavigate();
    
    function sairAdm(){
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Login');
        }, 1000);
    }

    function sairMenu(){
        ref.current.continuousStart();

        setTimeout(() => {
            Navigate('/Menu');
        }, 1000);
    }

    Storage.remove('usuario-logado')

    return(
        <main className='Leanding-Page'>
             <LoadingBar color='#6B5B40' ref={ref} />
             <header>
        <nav>
            <Link to='/Leanding' href='/Leanding'><img class="logo" src={logo} alt="Logo Quickly" width="110px" /></Link>
            
        </nav>
        <div class="nav-header">
           
                <a onClick={sairMenu} id='link-nav' class="a-header">Menu</a>
            
                <a onClick={sairAdm} id='link-nav' class="a-header">Adm</a> 
        
        </div>
        
    </header>
    <main>
        <section className="sec1">
            <div className="div-sec1">
                <h1 className="sec1-sob">Sobre nós</h1>
                <p className="hist">
                    Com um novo conceito, a Pizzaria Quickly surgiu para oferecer a melhor experiência em pizza para seus clientes através de uma ideia divertida que mistura a comida favorita da maioria das pessoas. A Quickly chegou para revolucionar o segmento de pizzarias, com uma entrega ágil e segura, garantimos o sabor inigualável de nossos produtos, com um armazenamento adequado durante o transporte para sua pizza chegar quente e extremamente saborosa, como se você estivesse comendo em nossa pizzaria.
                </p>
            </div>
        </section>
        <section className="sec2">
            <div className="div-sec2">
                <h1>Estamos No</h1>
            </div>
            <div className="img-sec2">
                <img width="140px" src={Ifood} alt="Ifood" />
                <img width="140px" src={Rappi} alt="Rappi" />
                <img width="140px" src={Uber} alt="" />
            </div>
        </section>
        <section className="sec3">
            <div className="container-sec3">
                <div className="divider">
                    <img src={divider} alt="" />
                </div>
                <p className="p-sec3">Ingredientes selecionados, <br></br>receitas de família, tradição e inovação 
                <br></br>andando juntas pra oferecer o melhor.</p>
                <div className="divider">
                    <img src={divider} alt="" />
                    
                </div>   
            </div>        
        </section>  
        <section class="sec4">
            <div class="h1-sec4">
                <h1>Recomendações da casa</h1>
            </div>
            <div className="container-sec4">
                <div className="subcontainer-sec4">
                    <div className="pizza">
                        <div>
                            <img className="img-pizza" src={Queijo} alt="Pizza Quatro Queijos" width="90px" height="auto" />
                        </div>
                        <div className="descricao-pizza">
                            <h3>Pizza Quatro <br></br> Queijos</h3>
                            <p>Mussarela, catupiry, provolone, parmesão e azeitonas.</p>
                        </div>
                    </div>

                    <div className="pizza">
                        <div>
                            <img className="img-pizza" src={Pepperoni} alt="Pizza de Pepperoni" width="90px" height="auto" />
                        </div>
                        <div className="descricao-pizza">
                            <h3>Pizza Pepperoni</h3>
                            <p>Mussarela, pepperoni, champignon e azeitonas.</p>
                        </div>
                    </div>

                    <div className="pizza">
                        <div>
                            <img className="img-pizza" src={Alho} alt="Pizza de Alho" width="90px" height="auto" />
                        </div>
                        <div className="descricao-pizza">
                            <h3>Pizza de Alho</h3>
                            <p>Alho, mussarela, rodelas de tomate, parmesão e azeitonas.</p>
                        </div>
                    </div>
        
                </div>
                <div className="subcontainer2-sec4">
                    <div className="pizza">
                        <div>
                            <img className="img-pizza" src={Alema} alt="Pizza Alemã" width="90px" height="auto" />
                        </div>
                        <div className="descricao-pizza">
                            <h3>Pizza Alemã</h3>
                            <p>Mussarela, calabresa moída, cebola, parmesão e azeitonas.</p>
                        </div>
                    </div>

                    <div className="pizza">
                        <div>
                            <img class="img-pizza" src={Bacon} alt="Pizza de Bacon" width="90px" height="auto" />
                        </div>
                        <div className="descricao-pizza">
                            <h3>Pizza de Bacon</h3>
                            <p>Mussarela, bacon, ovo e azeitonas.</p>
                        </div>
                    </div>

                    <div className="pizza">
                        <div>
                            <img className="img-pizza" src={Doce} alt="Pizza de Chocolate c/ Morangos" width="90px" height="auto" />
                        </div>
                        <div className="descricao-pizza">
                            <h3>Pizza Chocolate c/ Morangos</h3>
                            <p>Chocolate ao leite e morangos fatiados.</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='cardapio'>
                    <a onClick={sairMenu} className='a-cardapio'>Cárdapio completo</a>
                </div>    
        </section>
        <section className="sec5">
            <div>
                <h1 className="h1-sec5">Como prefere falar conosco?</h1>
            </div>
        </section>
        <section class="sec6">
            <div class="container-sec6">
                <div class="subcontainer-sec6">
                    <div class="logo-sec6">
                        <img src={Email} alt="Email" height="30px" />
                        <h2>E-mail</h2>
                    </div>
                    <div class="logo-sec6">
                        <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=quicklypizza@gmail.com' target={"_blank"} rel="noreferrer">quicklypizza@gmail.com</a>
                    </div>
                </div>

                <div class="subcontainer-sec6">
                    <div class="logo-sec6">
                        <img src={Instagram} alt="Instagram" height="30px" />
                        <h2>Instagram</h2>
                    </div>
                    <div class="logo-sec6">
                        <a a href='https://www.instagram.com/boaventuraxx/' target={"_blank"} rel="noreferrer">@quicklypizzaria</a>
                    </div>
                </div>
            
                <div className="subcontainer-sec6">
                    <div className="logo-sec6">
                        <img src={Whats} alt="Whatsapp" height="30px" />
                        <h2>Whatsapp</h2>
                    </div>
                    <div className="logo-sec6">
                        <p>11 98783-8531</p>
                    </div>
                </div>
            </div>
        </section>
        </main>
        <footer>
           <Rodape />
    </footer>
        </main>

    );
}