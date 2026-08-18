import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  // public nom: string = '';
  // public email: string = '';
  // public avis: string = '';
  // public phones: string[] = [''];
  public phones: FormControl[] = [new FormControl('', [Validators.required, Validators.pattern("[0-9]{9}$")])];
  public name = new FormControl('', [Validators.required, Validators.minLength(9)])
  public email = new FormControl('', [Validators.required, Validators.email])
  public avis = new FormControl('', Validators.required)


  public myForm = new FormGroup(
    {
    name: this.name,
    email: this.email,
    avis: this.avis,
    phone0: this.phones[0]
  }
);

  addphonenumber() {
    const addedPhone = new FormControl('', [Validators.required, Validators.pattern("[0-9]{9}$")])
    const phoneKey = "phone" + this.phones.length;
    // this.myForm.addControl(phoneKey, addedPhone); 
    // this.myForm.addControl(("phone" + this.phones.length), new FormControl('', [Validators.required, Validators.pattern("[0-9]{9}$")]))
    this.phones.push(new FormControl('', [Validators.required, Validators.pattern("[0-9]{9}$")]));    
    // this.phones.push("");
  }

  isPhoneValid(index: number){
    return this.myForm.get('phone' + index)?.dirty && this.myForm.get('phone' + index)?.valid
  }
  isPhoneInvalid(index: number) {
    return this.myForm.get('phone' + index)?.touched && this.myForm.get('phone' + index)?.invalid 
  }

  deletephonenumber(index: number) {
    if (this.phones.length > 1) {
      this.phones.splice(index, 1);
    }
    // this.phones.splice(index,1);
  }
  onSubmit(event: Event) {
    event.preventDefault();
   
    // console.log(`Nom: ${this.nom}`);
    // console.log(`Email: ${this.email}`);
    // console.log(`Avis: ${this.avis}`);
    //Ici on peut envoyer les données à un service ou à une API
  }
}
