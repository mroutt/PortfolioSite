import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class SkillCards extends LightningElement {
    adminImageURL = IMAGES + '/admin.png';
    trainingImageURL = IMAGES + '/training.png';
    serviceImageURL = IMAGES + '/service.png';
}