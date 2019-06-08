import React, {useState, useEffect} from 'react';
import './App.css';
import victorpic from './images/victor_1x1.jpg'
import iconInstagram from './images/icons/instagram.svg'
import iconLinkedin from './images/icons/linkedin.svg'
import iconTwitter from './images/icons/twitter.svg'
import iconYoutube from './images/icons/youtube.svg'
import iconUpwork from './images/icons/upwork.svg'
import iconGithub from './images/icons/github.svg'

import imgPortfolioPersonal from './images/portfolioPersonalSite.png'
import imgPortfolioComercial from './images/portfolioComercial.png'
import imgPortfolioHotel from './images/portfolioHotel.png'

import illusContact from './images/illustrations/undraw_contact_us_15o2.svg'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line
  var instances = M.Sidenav.init(elems);
});

function AbaEmExibicao(abaAtual){

  switch(abaAtual){
    case 1:
    return(
      <>
        <div className="row">
          <h2>Blog</h2>
        </div>
        <div className="row">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="row right">
          <a onClick={() => {}} href="#!">ver mais publicações</a>
        </div>
      </>
    );
      case 2:
        return(
          <>
            <div className="row">
              <h2>Entre em contato</h2>
            </div>
            <div className="row">
              <div style={{display:'flex', justifyContent: 'center'}} className="col s12 m6 l6">
                <img style={{width:'100%'}} src={illusContact} alt="contato victor nogueira"/>
              </div>
              <div className="col s12 m6 l6">

              <form name="contato" netlify>
                    <div className="row">
                      <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="name" name="nome" type="text" className="validate"/>
                        <label htmlFor="name">Nome</label>
                      </div>
                      <div className="input-field col s6">
                        <i className="material-icons prefix">phone</i>
                        <input id="telephone" name="telefone" type="tel" className="validate"/>
                        <label htmlFor="telephone">Telefone</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12"> 
                        <i className="material-icons prefix">email</i>
                        <input id="email" name="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">description</i>
                        <textarea id="message" name="mensagem" className="materialize-textarea"></textarea>
                        <label htmlFor="message">Mensagem</label>
                      </div>
                    </div>
                    <div className="row" style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <button className="btn waves-effect waves-light light-blue darknen-2  " type="submit" name="action">Enviar
                      <i className="material-icons right">send</i>
                    </button> */}
                    <input type="submit" value="enviar"/>
                    </div>
                  </form>

              </div>
            </div>
          </>
        );
      case 3:
        return(
          <>
            <div className="row">
              <h2>Cursos</h2>
            </div>
            <div className="row">
              <div className="row">
                <p>Quer dominar alguma tecnologia mas não sabe por onde começar? Então esses cursos são perfeitos para você! com eles você conseguirá ter uma base sólida de conhecimento para <b>iniciar sua carreira de desensolvedor</b>, ou até mesmo aprender algo novo! estude em qualquer lugar e em qualquer instante.</p>
              </div>
              <div className="row">
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <img src="https://i.ibb.co/QmshX2q/r-language-background.jpg" alt="Curso de R para iniciantes"/>
                    </div>
                    <div className="card-content">
                      <span className="card-title center">
                        Linguagem R para iniciantes
                      </span>
                      <p><b>Nível:</b> Iniciante</p>
                      <p><b>Sobre:</b> Aprenda os principais conceitos e comandos na linguagem R, nesse curso você vai aprender a criar seu primeiro programa em R.</p>
                      <a className="btn-flat blue white-text waves-effect" href="#!">Começar agora</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
          return(
            <>
              <div className="row">
                <h2>Meu Portfolio</h2>
              </div>
              <div className="row">
                <div className="row">
                  <p>Esses são alguns dos meus trabalhos mais recentes como desenvolvedor.</p>
                </div>
                <div className="row">
                  <div className="col s12 m6 l6">
                    <div className="card">
                      <div className="card-image">
                        <img src={imgPortfolioPersonal} alt="Victor Nogueira portfolio blog pessoal" />
                      </div>
                      <div className="card-content">
                        <span className="card-title">Blog pessoal</span>
                        <p>Template criado para ser um Blog pessoal simples, cinco páginas para exibir um formulario de contato, página com o portfolio, página sobre o autor e um botão de redicionamento de para contratar os serviços como freelance.</p>
                        <p><b>Tecnologias usadas:</b> React.JS e MaterializeCss</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m6 l6">
                    <div className="card">
                      <div className="card-image">
                        <img src={imgPortfolioComercial} alt="Victor Nogueira portfolio sistema comercial" />
                      </div>
                      <div className="card-content">
                        <span className="card-title">Sistema comercial</span>
                        <p>Sistema para controle de administrativo de um comercio, nesse sistema é possivel fazer o controle de entrada e saida de produtos com lançamento de notas fiscais, controle de logistica, gestão financeira completa e fazer movimentações de entrada e de saida com compra e venda de produtos.</p>
                        <p><b>Tecnologias usadas:</b> JavaScript, PHP e MaterializeCss</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card">
                      <div className="card-image">
                        <img src={imgPortfolioHotel} alt="Victor Nogueira portfolio sistema hotel" />
                      </div>
                      <div className="card-content">
                        <span className="card-title">Sistema de reservas de hotel</span>
                        <p>Sistema bem simples de reserva de hospedes em um hotel espanhol, com esse sistema é possivel fazer o controle dos hospedes que estao no hotel, bem como fazer check-in e check-out de hospedes.</p>
                        <p><b>Tecnologias usadas:</b> JavaScript, PHP e MaterializeCss</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
      case 5:
          return(
            <>
              <div className="row">
                <h2>Sobre mim</h2>
              </div>
              <div className="row">
                <div className="row">
                  <h4>Minha relação com a tecnologia</h4>
                  <p>Olá, meu nome é Victor Hugo Nogueira, sou Programador frelance a pouco mais de 3 anos e estudo sobre programação desde os 13 anos. Minha Paixão por tecnologia começou ainda cedo quando eu morava em uma cidade do interior de São Paulo chamada Todoro Sampaio, nessa época eu não tinha computador, então eu tinha que ir até a biblioteca municipal da cidade para poder ter acesso a internet. Naquela época o Facebook estava crescendo muito e o Orkut estava perdendo espaço, foi ai que eu vi a oportunidade de criar uma página para poder publicar sobre coisas do meu interesse, que naquela época era, pasmem, futebol! Foi assim que surgiu a página “Boleiragem”, onde eu postava os melhores momentos dos jogos que eu assistia, mas eu queria mais, queria ter um portal de noticias de futebol, e aos poucos eu fui entendendo como o HTML e CSS funcionavam, e depois conheci o PHP, e assim começou minha jornada no mundo da programação! Amor a primeira vista.</p>
                  <p>Acredito que a tecnologia e o conhecimento são ferramentas que podem transformar vidas, pois vivi essa transformação. Espero um dia poder mostrar isso para pessoas que não tem acesso a esse tipo de informação, e quem sabe contribuir para um mundo melhor.</p>
                  <p>Atualmente sou Estudande de engenharia biomédica pela Universidade Federal de Uberlandia/MG, esse é um curso que chamou minha atenção desde a primeira vez que eu vi, logo pensei: "Desenvolver tecnologias e aplicar na area da medicina? tem como ser melhor?", mais uma vez amor a primeira vista. Trabalho como desenvolvedor fullstack freelance e também dou aulas particulares de programação presenciamente ou a distancia(caso tenha interesse entre em contato).</p>
                </div>
                <div className="row">
                  <h4>Educação</h4>
                  <div className="">
                    <h5>Ensino médio:</h5>
                    <p>
                      Ensino médio completo<br/>
                      <b>Ano de conclusão: </b>2015<br/>
                      <b>Escola:</b> Escola Lucia Silva de Assumpção
                    </p>
                  </div>
                  <div className="">
                    <h5>Engenharia Biomédica</h5>
                    <p>
                      Bacharelado em Engenharia Biomédica em andamento<br/>
                      <b>Universidade:</b> Universidade Federal de Uberlandia - MG <br/>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
    default:
      return <></>
  }
  
}

function Post(){
  return(
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src="https://bigdata-madesimple.com/wp-content/uploads/2019/02/computing.jpg" alt="post"/>
        </div>
        <div className="card-content">
          <p className="grey-text">10/10/2019</p>
          <span className="card-title">Esse é o titulo da publicacao</span>
          <p>Essa é uma descfricao mais completa sobre o post</p>
        </div>
      </div>
    </div>
  );
}

function App(){
  const [scrollDistance, setScrollDistance] = useState(window.scrollY);
  const [shadowMenu, setShadowMenu] = useState(0);
  const [abaAtual, setAbaAtual] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.getElementsByClassName('imagemVictor')[0].classList.remove("scale-out")
    document.getElementsByClassName('imagemVictor')[0].classList.add("scale-in")

  }, []);

  useEffect(() => {
    scrollDistance === 0 ? setShadowMenu(0) : setShadowMenu(1)
    if(scrollDistance >= 450){
      document.getElementById("victorPicOnTopMenu").classList.remove("scale-out")
      document.getElementById("victorPicOnTopMenu").classList.add("scale-in")
    }else{
      document.getElementById("victorPicOnTopMenu").classList.add("scale-out")
      document.getElementById("victorPicOnTopMenu").classList.remove("scale-in")
    }
  }, [scrollDistance]);

  useEffect(() =>{
    abaAtual === 0 ? window.scrollTo(0, 0) : window.scrollTo(0, 600);
  }, [abaAtual])

  function handleScroll(){
    setScrollDistance(window.scrollY)
  }

  function trocaAba(novaAba){
    setAbaAtual(novaAba);
  }
  return(
    <>
      <div className="navbar-fixed ">
        <nav className={`white z-depth-${shadowMenu}`}>
          <div className="container">
            <div className="nav-wrapper">
              <a  onClick={() => trocaAba(0)} style={{display: 'flex', alignItems:'center'}} href="#!" className="brand-logo grey-text text-darken-4">
              <img style={{height:30, borderRadius:15, marginRight: 10}} id="victorPicOnTopMenu" className="scale-transition scale-out" src={victorpic} alt="Victor Nogueira desenvolvedor"/>
                Victor<span style={{marginLeft:7}} className="hide-on-small-only">Nogueira</span>
              </a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons grey-text">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li onClick={() => trocaAba(1)}><a href="#!" className="grey-text text-darken-4">Blog</a></li>
                <li onClick={() => trocaAba(2)}><a href="#!" className="grey-text text-darken-4">Contato</a></li>
                {/* <li onClick={() => trocaAba(3)}><a href="#!" className="grey-text text-darken-4">Cursos<span className="orange darken-2 white-text badge pulse">novo</span></a></li> */}
                <li onClick={() => trocaAba(4)}><a href="#!" className="grey-text text-darken-4">Portfolio</a></li>
                <li onClick={() => trocaAba(5)}><a href="#!" className="grey-text text-darken-4">Sobre mim</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li onClick={() => trocaAba(1)}><a href="#!" className="grey-text text-darken-4">Blog</a></li>
        <li onClick={() => trocaAba(2)}><a href="#!" className="grey-text text-darken-4">Contato</a></li>
        {/* <li onClick={() => trocaAba(3)}><a href="#!" className="grey-text text-darken-4">Cursos<span className="orange darken-2 white-text badge pulse">novo</span></a></li> */}
        <li onClick={() => trocaAba(4)}><a href="#!" className="grey-text text-darken-4">Portfolio</a></li>
        <li onClick={() => trocaAba(5)}><a href="#!" className="grey-text text-darken-4">Sobre mim</a></li>
      </ul>

      {/* Spotlight */}

      <div className="site row">
        <div className="container">
          <div className="col s12 m5 l6 imagemVictorCon hide-on-small-only">
            <img className="imagemVictor scale-transition scale-out" src={victorpic} alt="Victor Nogueira desenvolvedor"/>
          </div>
          <div className="col s12 m7 l6 info">
            <p>Olá, meu nome é</p>
            <h2>Victor Nogueira</h2>
            <p>Desenvolvedor Full-stack, professor particular de programação, estudante de engenharia biomédica.</p>
            <div className="socialNetwork">
              <a href="https://www.upwork.com/o/profiles/users/_~0101a7471ebfaf0140/" target="_blank" rel="noopener noreferrer" title="Contrate-me como freelancer">
                <img src={iconUpwork} alt="Victor Hugo Nogueira UpWork" />
              </a>
              <a href="https://instagram.com/ovictorhnogueira" target="_blank" rel="noopener noreferrer" title="Siga-me no Instagram">
                <img src={iconInstagram} alt="Victor Hugo Nogueira Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/victorhnogueira" target="_blank" rel="noopener noreferrer" title="Siga-me no LinkedIn">
                <img src={iconLinkedin} alt="Victor Hugo Nogueira LinkedIn" />
              </a>
              <a href="https://twitter.com/victorhnogueira" target="_blank" rel="noopener noreferrer" title="Siga-me no Twitter">
                <img src={iconTwitter} alt="Victor Hugo Nogueira Twitter" />
              </a>
              <a href="#!" target="_blank" rel="noopener noreferrer" title="Inscreva-se no meu canal">
                <img src={iconYoutube} alt="Victor Hugo Nogueira Youtube" />
              </a>
              <a href="https://github.com/victorhnogueira" target="_blank" rel="noopener noreferrer" title="Veja meus repositórios no github">
                <img src={iconGithub} alt="Victor Hugo Nogueira Youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ultimas publicacoes do Blog */}
      <div className="row">
        <div className="container">
          {AbaEmExibicao(abaAtual)}
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer light-blue darken-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
              <form name="contact" netlify netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />

  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>

</form>
                <h5 className="white-text">Victor H. Nogueira</h5>
                <p className="grey-text text-lighten-4">"O sucesso é a soma de pequenos esforços repetidos dia após dia."</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Redes sociais</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ovictorhnogueira/">Instagram</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://twitter.com/victorhnogueira">Twitter</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://github.com/victorhnogueira">Github</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="#!">Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright Victor Nogueira
            <a className="grey-text text-lighten-4 right" href="#!">sitemap</a>
            </div>
          </div>
        </footer>
    </>
  );
}

export default App;