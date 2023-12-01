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
    email: '',
    phoneNumber: '',
    age:'',
    cin: '',
    maladies: [],
    tension: ''
 };
 isInvalid: boolean = false; // Variable pour vérifier la validation au focus

  onFocus() {
    this.isInvalid = true; // Activer la validation au focus
  }

  onBlur() {
    this.isInvalid = false; // Désactiver la validation au blur
  }
 maladies = [
    {id: 1, nom: 'hypertension artérielle'},
    {id: 2, nom: 'Insuffisance cardiaque'},
   

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

 maladiesList = ['Hypertension', 'Insuffisance cardiaque'];

 onSubmit(utilisateurForm: NgForm) {
   console.log(utilisateurForm)
 }
 message: string = ''; 

 displayMessage(): void {
   this.message = 'Votre demande est ajoutée';
 }
 showCard: boolean = false;


 toggleCard() {
   this.showCard = !this.showCard;
 }
}
