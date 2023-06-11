import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class Hero extends LightningElement {

    imageURL = IMAGES + '/hero.png';
}