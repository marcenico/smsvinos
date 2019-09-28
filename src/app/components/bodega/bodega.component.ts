import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-bodega",
  templateUrl: "./bodega.component.html",
  styleUrls: ["./bodega.component.scss"],
  animations: [
    trigger("fadeAnimation", [
      state("in", style({ opacity: 1 })),

      transition(":enter", [style({ opacity: 0 }), animate(600)]),

      transition(":leave", animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class BodegaComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
