import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  myForm:any;
  i: number = 0;
  constructor( private formbuilder:FormBuilder) { 
    this.myForm=this.formbuilder.group({
      nom:['',[Validators.required]],
      DN:['',[Validators.required]],
      genre:['',[Validators.required]],
      age:['',[Validators.required]],
      PA:['',[Validators.required]],
      FC:['',[Validators.required]],
      Ox:['',[Validators.required]],
      items:this.formbuilder.array([
        this.formbuilder.group({
          nom:[""],
          DN:[""],
          PA:[""],
          FC:[""],
          Ox:[""],
        })
      ])
    })
    
  }

 ngOnInit(): void {
 }

 onSearch() {
    console.log('Recherche en cours...');
 }
  searchTerm = '';

  users = [
     { id: 1, name: 'Mouna KETATA',DH:'02/02/2020',genre:'Female',age:'20',PA:'110',FC:'90%',Ox:'70BPM' },
     { id: 2, name: 'xxx',DH:'02/02/1995',genre:'Male',age:'50',PA:'110',FC:'88%',Ox:'75BPM' },
     { id: 3, name: 'yyy',DH:'31/07/1985',genre:'Female',age:'52',PA:'100',FC:'97%',Ox:'90BPM' },
     { id: 4, name: 'Dzzz',DH:'08/12/1952',genre:'Male',age:'38',PA:'130',FC:'75%',Ox:'70BPM' },
     { id: 5, name: 'ffff',DH:'19/12/1933' ,genre:'Female',age:'44',PA:'120',FC:'98%',Ox:'76BPM'},
    
  ];
  doctor=[
    {id:1, name:'DR.Kammoun'},
  ]
 
  get filteredUsers() {
     return this.users.filter(user =>
       user.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
     );
  }
  get items(){
    return this.myForm.get('items') as FormArray; 
  }
  delete(i:any){
this.items.removeAt(i)
  }
  effacerLigne(index: number) {
    this.users.splice(index, 1);
  }
}
