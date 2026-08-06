import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  imports: [FormsModule],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  public nom: string = '';
  public email: string = '';
  public avis: string = '';

  onSubmit() {
    console.log(`Nom: ${this.nom}`);
    console.log(`Email: ${this.email}`);
    console.log(`Avis: ${this.avis}`);
    //Ici on peut envoyer les données à un service ou à une API
  }
}
