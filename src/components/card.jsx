import './card.scss';
import logo from '../assets/logo.jpg'

export default function Card () {
    return(
        <div className='container'>
            <img src={logo} id='logo' alt="" />
            <div className='titre'>
            <h1>Titre</h1>
            <p>description</p>
            </div>
        </div>
    )
}