import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
  
})
export class AjoutComponent {
  utilisateur = {
    nom: '',
    prenom: '',
    maladies: [],
    tension: ''
 };

 maladies = [
    {id: 1, nom: 'hypertension artérielle'},
    {id: 2, nom: 'Insuffisance cardiaque'},
    {id: 3, nom: 'Autre...'},
    // ajoutez d'autres maladies si nécessaire
 ];
 onCheckChange(event: any, maladieId: number) {
  if (event.target.checked) {
      this.utilisateur.maladies.push();
  } else {
      this.utilisateur.maladies = this.utilisateur.maladies.filter(maladie => maladie !== maladieId);
  }
}
 ajouterUtilisateur() {
    console.log(this.utilisateur);
 }

 maladiesList = ['Hypertension', 'Insuffisance cardiaque', 'Cholesterol', 'Diabète'];

 onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Détails de l\'utilisateur:', this.utilisateur);
      form.reset();
    }
 }
 message: string = ''; 

 displayMessage(): void {
   this.message = 'Votre demande est ajoutée';
 }
 showCard: boolean = false;
 texteDeLaCarte: string = 'Texte à afficher dans la carte';

 toggleCard() {
   this.showCard = !this.showCard;
 }
}
