import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  private ageConfirmed: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  confirmed(){
    this.ageConfirmed=true;
  }
}
