import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import { loadStyle } from 'lightning/platformResourceLoader';


export default class NavMenu extends LightningElement {

renderedCallback() {

    loadStyle(this, ICONS + '/style.css');
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
handleHamburgerClicked() {
    
    const navMenu = this.template.querySelector('.topnav');
    
    navMenu.classList.toggle('responsive');
  }

}