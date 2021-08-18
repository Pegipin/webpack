import _ from 'lodash';
import './assets/styles/style.scss';
import Icon from './assets/images/winnie1.png';


function component() {
    const element = document.createElement('div');


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    return element;
}

document.body.appendChild(component());