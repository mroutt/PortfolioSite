import { LightningElement } from 'lwc';
import createLead from '@salesforce/apex/ContactMeController.createLead';

export default class ContactMeButton extends LightningElement {

    dialog;
    firstname;
    lastname;
    company;
    email;
    description;
    snackbar;

    renderedCallback() {
        this.dialog = this.template.querySelector('.contact-dialog');
        this.firstname = this.template.querySelector('.firstname');
        this.lastname = this.template.querySelector('.lastname');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.description = this.template.querySelector('.description');
        this.snackbar = this.template.querySelector('c-snackbar');
    }

    showDialog() {
        this.dialog.showModal();
    }

    closeDialog() {
        this.dialog.close();
    }

    handleSubmit(event) {
        event.preventDefault();

        const firstnameValue = this.firstname.value;
        const lastnameValue = this.lastname.value;
        const companyValue = this.company.value;
        const emailValue = this.email.value;
        const descriptionValue = this.description.value;
        
        createLead({
            firstname: firstnameValue,
            lastname: lastnameValue,
            company: companyValue,
            email: emailValue,
            description: descriptionValue
        })
        .then(() => { this.snackbar.showSnackBar('Your request has been received.')})
        .catch((error) => {
            this.snackbar.showSnackBar('Unable to accept contact request.');
            console.log(JSON.stringify(error));
        });

        this.closeDialog();
    }
}