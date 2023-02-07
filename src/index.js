import './style.css';
import '../assets/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css';
import '../assets/bootstrap-5.3.0-alpha1-dist/js/bootstrap.bundle.js';
import Logo from '../assets/Logo.jpg';

const brand = document.querySelector('.navbar-brand');
const myLogo = new Image();
myLogo.src = Logo;
brand.appendChild(myLogo);
