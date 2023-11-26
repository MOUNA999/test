import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Ajoutez d'autres options selon vos besoins
  ];

  selectedOptions: string[] = [];
  utilisateur = {
    nom: '',
    prenom: '',
    tension: '',
    fréquenceC:'',
    maladies: []
 };
 Data = [
  { id: 1, name: 'Mouna KETATA',PA:'110',FC:'90%',Ox:'70BPM' },
  { id: 2, name: 'Bob',PA:'110',FC:'88%',Ox:'75BPM' },
  { id: 3, name: 'Carol',PA:'100',FC:'97%',Ox:'90BPM' },
  { id: 4, name: 'David',PA:'130',FC:'75%',Ox:'70BPM' },
  { id: 5, name: 'Eve',PA:'120',FC:'98%',Ox:'76BPM'},
 
];

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
}
