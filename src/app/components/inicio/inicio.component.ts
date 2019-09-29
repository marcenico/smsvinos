import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
  animations: [
    trigger("fadeAnimation", [
      state("in", style({ opacity: 1 })),

      transition(":enter", [style({ opacity: 0 }), animate(600)]),

      transition(":leave", animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class InicioComponent implements OnInit {
  private ageConfirmed: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}
  confirmed() {
    this.ageConfirmed = true;
  }
}
