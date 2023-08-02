import './CSS/pageMain.css'
import blackSand from './assets/Main-page-assets/black-sand.mp4'
import App from './App.jsx'
import Menu from './menu.jsx'

function mainPage() {

    return (
        <>
            <section className='section sec1'>
                <Menu/>
                <div className="logo-container">
                    <h2 className="logo">OrangeFlow</h2>
                    <div className="logo-symbol"></div>
                </div>
                <div className="main-page-container">
                    <div className="main-text-container">
                        <h1 className="main-text">Where Creativity & Strategy Converge</h1>
                    </div>
                    <div className="main-page-overlay"></div>
                    <video autoPlay loop playsInline className='video-beach' >
                        <source src={blackSand} type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className='section sec2'>
                <App/>
            </section>
            <section className='section sec3'></section>
            <section className='section sec4'></section>
            <section className='section sec5'></section>
            
        </>
    );
}


export default mainPage