import {arrayNavItems} from '../../../../utils/NavItems';
import { useTheme } from '../../../../utils/Hooks/useTheme';
import Sidebar from '../Sidebar/index'
import headerVideo from './../../../../assets/videos/banner-home-run-cinematic.mp4'
import './styles.css';
import { BiSearch } from 'react-icons/bi';
import { RiMenuFill } from 'react-icons/ri';

const brandLogo = require('../../../../assets/images/fullSportLogo.png');
const carrinhoIcon = require('../../../../assets/icons/carrinho-icon.png');
const suporteIcon = require('../../../../assets/icons/help-icon.png');
const contaIcon = require('../../../../assets/icons/conta-icon.png');

const HomeHeader = () =>{

    const {theme, setTheme} = useTheme();

    function openTeste(){
      let sidebar = document.querySelector('.sidebar-header');
      var isSideOpen = sidebar?.classList.contains('hideShow')
      isSideOpen ? sidebar?.classList.remove("hideShow") : sidebar?.classList.toggle("hideShow")
    }

    return(
        <>
        <div className="sidebar-header hideShow">
          <button className="toggleSidebar" onClick={openTeste}>
            <RiMenuFill size={30}/>
          </button>
          <div className="sidebar-logo">
              <img src={brandLogo} alt="" />
          </div>
          <Sidebar/>
        </div>
        <div className="header-top-barra">
            <div className="home-barra-acess-props hide-header">
                <ul>
                    <li>
                    <span>Aumentar Fonte</span>
                    </li>
                    <li>
                    <span>Diminuir Fonte</span>
                    </li>
                    <li>
                    {theme === 'light' ? 
                        (<span onClick={()=> setTheme("dark")} className="cursor-pointer"> Sem Contraste</span>)
                        :
                        (<span onClick={()=> setTheme("light")} className="cursor-pointer">  Alto Contraste</span>)
                        }
                    </li>
                    {/* <li>
                    <span>Modo Escuro</span>
                    </li> */}
                </ul>
            </div>
            <div className="home-barra-client-items">
                <ul>
                    <li>
                        <img src={carrinhoIcon} alt="Carrinho" />
                        Carrinho
                    </li>
                    <li>
                        <img src={suporteIcon} alt="Suporte" />
                        Suporte
                    </li>
                    <li>
                        <img src={contaIcon} alt="Conta" />
                        Conta
                    </li>
                </ul>
            </div>
        </div>
        <div className="search-container">
            <div className="searchbar-contaienr">
                <input type="text" placeholder='O que você busca?'/>
                <button className="search-btn"><BiSearch/></button>
            </div>
            <div className="hide-header">
                <ul className="menu-items">
                { arrayNavItems.map((el: any) => {
                    return(
                        <li className="menu-item">
                            <a href="{el.path}" className='menu-item-btn'>
                                {el.title}
                            </a>
                        </li>
                    )
                    })}
                </ul>
            </div>
        </div>
        <div className="header-desc">
            <div className="header-txt">
                <span className='txt-light'>o melhor dos</span>
                <span className='txt-bold'>artigos esportivos</span>
                <span className='txt-light'>para <span className='underline'>você.</span></span>
            </div>
            <div className="brand-container">
                <img src={brandLogo} alt="Full Sports" />
            </div>
        </div>
        <div className="video-header">
            <div className="header-transparent-cover"></div>
            <video autoPlay loop muted>
                <source src={headerVideo} type="video/mp4"/>
            </video>
        </div>
        
        </>
    )
}

export default HomeHeader