import Puissance4 from "../../assets/img/puissance4.png";
import Fractal from "../../assets/img/fractal.jpg";
import Engine from "../../assets/img/engine-0.png";
import Doom from "../../assets/img/doom-1.png";
import FractalC from "../../assets/img/fractal-3.png";
import CandyShop from '../../assets/img/CandyShop.png';
import MandelbrotMockup from '../../assets/img/MandelbrotMockup.jpeg'
import IAGenerator from '../../assets/img/GeneratorMockup.jpeg'
import ArvinCare from '../../assets/img/ArvinCareMockup.jpeg'
import Hellowork from '../../assets/img/HelloworkMockup.jpeg'

export default function Projects() {
    return (
            <div className="project-container">
                <div className="project-card"
                     data-aos={'fade-right'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="200"
                     data-aos-duration="200">
                    <img src={MandelbrotMockup} className="project-img" alt=""/>
                        <div className="project-content project-content-white">
                            <h1 className="project-title">Fractal Player</h1>
                            <p className="project-info">
                                React-Native - Expo - ThreeJS<br/>2023<br/>Mandelbrot fractal application<small><br/>Infinite Zoom</small>
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open(`https://github.com/FindTheFox/Fractal-React-Native-Three`, '_blank')}>Github
                                </button>
                            </div>
                        </div>
                </div>

                <div className="project-card"
                     data-aos={'fade-left'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="200"
                     data-aos-duration="200">
                    <img src={IAGenerator} className="project-img" alt=""/>
                        <div className="project-content project-content-white">
                            <h1 className="project-title">AIGenerator</h1>
                            <p className="project-info">
                                SwiftUI - UIKit - Dall-E API<br/>2023<br/>IA generated image based on prompt. Share to your friend, save and edit your creation.<small><br/></small>
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open(`https://github.com/FindTheFox/AIGenerator`, '_blank')}>Github
                                </button>
                            </div>
                        </div>
                </div>

                <div className="project-card"
                     data-aos={'fade-right'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="200"
                     data-aos-duration="200">
                    <img src={ArvinCare} className="project-img" alt=""/>
                        <div className="project-content project-content-white">
                            <h1 className="project-title">ArvinCare</h1>
                            <p className="project-info">
                                React-Native - Redux - Laravel<br/>2023<br/>Service de réservation de voiturier Rennais.<small><br/>Application  pour les clients, chauffeurs et admins</small>
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open(`https://apps.apple.com/us/app/arvin-care/id6445979745`, '_blank')}>Apple Store
                                </button>
                                <button className="project-btn github"
                                        onClick={()=>window.open(`https://play.google.com/store/apps/details?id=com.arvin_care.app`, '_blank')}>PlayStore
                                </button>
                            </div>
                        </div>
                </div>

                <div className="project-card"
                     data-aos={'fade-left'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="200"
                     data-aos-duration="200">
                    <img src={Hellowork} className="project-img" alt=""/>
                        <div className="project-content project-content-white">
                            <h1 className="project-title">Hellowork</h1>
                            <p className="project-info">
                                Swift / SwiftUI - Kotlin / Compose<br/>2023<br/>Premier acteur digital français du recrutement de l’emploi et de la formation, s’adresse à tous les actifs.<small><br/></small>
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open(`https://apps.apple.com/fr/app/hellowork-recherche-demploi/id408615037`, '_blank')}>Apple Store
                                </button>
                                <button className="project-btn github"
                                        onClick={()=>window.open(`https://play.google.com/store/apps/details?id=com.regionsjob.android&hl=fr&gl=US&pli=1`, '_blank')}>PlayStore
                                </button>
                            </div>
                        </div>
                </div>

                <div className="project-card"
                     data-aos={'fade-right'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="200"
                     data-aos-duration="200">
                    <img src={Puissance4} className="project-img" alt=""/>
                        <div className="project-content">
                            <h1 className="project-title">Puissance 4</h1>
                            <p className="project-info">
                                JQUERY - HTML - CSS/SCSS<br/>2022<br/>Plugin Jquery puissance 4 game made in
                                Javascript<small><br/>2-4 players</small>
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn live"
                                        onClick={()=>window.open(`https://samuelneveu.github.io/Puissance4/puissance4.html`, '_blank')}>see
                                    live
                                </button>
                            </div>
                        </div>
                </div>
                <div className="project-card"
                     data-aos={'fade-left'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="200"
                     data-aos-duration="200">
                    <img src={Fractal} className="project-img" alt=""/>
                        <div className="project-content">
                            <h1 className="project-title">Fractal JS</h1>
                            <p className="project-info">
                                JS - HTML - CSS<br/>2021<br/>Fractal mandelbrot algorithm in javascript<small><br/>Without
                                optimization better use on smartphone</small>
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open('https://github.com/SamuelNeveu/Fractol-JS', '_blank')}>Github
                                </button>
                                <button className="project-btn live" onClick={()=>window.open(
                            `http://wac.ovh`,
                            '_blank'
                          )}>see live
                                </button>
                            </div>
                        </div>
                </div>
                <div className="project-card"
                     data-aos={'fade-right'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="600"
                     data-aos-duration="200">
                    <img src={Engine} className="project-img" alt="" id="engine"/>
                        <div className="project-content">
                            <h1 className="project-title">3D Engine</h1>
                            <p className="project-info">
                                C<br/>3D engine build in C with SDL2<br/>Use for modelize .obj file in 3D environement<br/>Multi-threading
                                optimization
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open('https://github.com/FindTheFox/3D_Engine', '_blank')}>Github
                                </button>
                            </div>
                        </div>
                </div>
                <div className="project-card"
                     data-aos={'fade-left'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="600"
                     data-aos-duration="200">
                    <img src={Doom} className="project-img" alt="" id="doomImg"/>
                        <div className="project-content">
                            <h1 className="project-title">Doom</h1>
                            <p className="project-info">
                                C<br/>Doom Nukem game like using raycasting method<br/>First person shooter<br/>Optimization
                                with multi-threading
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open('https://github.com/SamuelNeveu/DoomNukem', '_blank')}>Github
                                </button>
                            </div>
                        </div>
                </div>
                <div className="project-card"
                     data-aos={'fade-right'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="1200"
                     data-aos-duration="200">
                    <img src={FractalC} className="project-img" alt="" id="fractalC"/>
                        <div className="project-content">
                            <h1 className="project-title">Fractal C</h1>
                            <p className="project-info">
                                Fractals algorithms in C<br/>Optimized with multi-threading<br/>Mandelbrot, Julia and 8
                                other algorithms<br/>Multiples coloring palette and algorithms
                            </p>
                            <div className="project-btn-grp">
                                <button className="project-btn github"
                                        onClick={()=>window.open('https://github.com/SamuelNeveu/Fractal', '_blank')}>Github
                                </button>
                            </div>
                        </div>
                </div>
                {/*
                <div className="project-card"
                     data-aos={'fade-left'}
                     data-aos-anchor=".project-container"
                     data-aos-offset="1200"
                     data-aos-duration="200">
                    <img src={CandyShop} className="project-img" alt=""/>
                    <div className="project-content project-content-white">
                        <h1 className="project-title">CandyShop</h1>
                        <p className="project-info">
                            ReactJS - CSS/SCSS<br/>2022<br/>E-commerce done with ReactJS<small></small>
                        </p>
                        <div className="project-btn-grp">
                            <button className="project-btn live white"
                                    onClick={()=>window.open(`http://candy.wac.ovh/`, '_blank')}>see
                                live
                            </button>
                        </div>
                    </div>
                </div>
                */}
            </div>
            )
}
