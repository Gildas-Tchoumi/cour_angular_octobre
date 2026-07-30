import { Component } from '@angular/core';
import { Footer } from '../../component/static/footer/footer';
import { Header } from '../../component/static/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './client-layout.html',
  styleUrl: './client-layout.css',
})
export class ClientLayout {}
