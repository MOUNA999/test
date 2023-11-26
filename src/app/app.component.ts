import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  imagesList: string[] = [
    'assets/images/garcon.png',
    'assets/images/ajouter-un-ami.png',
    'src/assets/images/rechercher.png',
    'src/assets/images/modifier.png',
    'src/assets/images/vision.png'


   
  ];

}
