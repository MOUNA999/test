import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  title = 'Challenge_EMBS';

  verifier(event: Event): void {
    const emailValue = (document.getElementById('exampleInputEmail1') as HTMLInputElement).value;
    const mdpValue = (document.getElementById('exampleInputPassword1') as HTMLInputElement).value;
    //alert(emailValue+mdpValue);
    if ( ! mdpValue.toString() && ! emailValue.toString() ) {
      alert('Please Enter Your Username And Your Password');

    }
    else if (! emailValue.toString()) {
      alert('Please Enter Your Username');
    } 
    else if ( ! mdpValue.toString()) {
      alert('Please Enter Your Password');
    }
    else { 
      location.replace("http://localhost:4200/index");
    }
} 
}
