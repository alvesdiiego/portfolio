import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['/assests/img/img7.png', '/assests/img/img8.png', '/assests/img/img5.png'];
}

