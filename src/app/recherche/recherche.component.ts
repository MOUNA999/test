import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  constructor() { }

 ngOnInit(): void {
 }

 onSearch() {
    console.log('Recherche en cours...');
 }
  searchTerm = '';

  users = [
     { id: 1, name: 'Mouna KETATA',DH:'02/02/2020',PA:'110',FC:'90%',Ox:'70BPM' },
     { id: 2, name: 'Bob',DH:'02/02/1995',PA:'110',FC:'88%',Ox:'75BPM' },
     { id: 3, name: 'Carol',DH:'31/07/1985',PA:'100',FC:'97%',Ox:'90BPM' },
     { id: 4, name: 'David',DH:'08/12/1952',PA:'130',FC:'75%',Ox:'70BPM' },
     { id: 5, name: 'Eve',DH:'19/12/1933' ,PA:'120',FC:'98%',Ox:'76BPM'},
    
  ];
 
  get filteredUsers() {
     return this.users.filter(user =>
       user.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
     );
  }

  
}
