import './index.scss'
import '../../common/common.scss'
import logo from '../../images/logo-header.png'
import {useState, useRef} from 'react'
import { useNavigate} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { LoginUser } from '../../api/usuarioapi.js'
import Storage from 'local-storage'





export default function Login() {
    
    

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carr, setCarr] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    async function Entrar(){

        
        ref.current.continuousStart()

        setCarr(true)
        try{

            const r = await LoginUser(email, senha);
            Storage('usuario-logado', r)
            
            
            setTimeout(() => {
                navigate('/Adm');
            }, 1000);
            }
        
        
            catch (err){
                setCarr(false)
                ref.current.complete()
                if(err.response.status === 401){
                    setErro(err.response.data.erro);
                } 
            }
        
    }

    function sairHome(){
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/Leanding');
        }, 1000);
    }

    function sairMenu(){
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/Menu');
        }, 1000);
    }

    Storage.remove('usuario-logado')

    return(
        <main className='Login-Page'>
            <LoadingBar color='#6B5B40' ref={ref} />
            <header>
            <nav>
            <a onClick={sairHome}> <img class="logo" src={logo} alt="Logo Quickly" width="110px" /></a>
            </nav>
            <div class="nav-header">
                <nav>
                    <a  class="a-header" onClick={sairHome} >Home</a>
                </nav>
                <nav>
                    <a onClick={sairMenu} class="a-header" >Menu</a> 
                </nav>
            </div>
        </header>
    <main>
        <section>
            <div className="login">
                <h3>Login</h3>
                <input value={email} type="email" placeholder="Email" onChange={ e => setEmail(e.target.value)} />
            </div>
            <div class="login">
                <h3>Senha</h3>
                <input value={senha} class="sss" type="password" placeholder="Senha" onChange={ e => setSenha(e.target.value)} />
            </div>
            <div className='error'>
                {erro}
            </div>
            <div className="div-entrar">
                <button onClick={Entrar} disabled={carr} className="entrar">Entrar</button>
            </div>
        </section>   
    </main>

        </main>

    );
}