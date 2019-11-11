import { Component, OnInit } from "@angular/core";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

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
  selectedDate: Date;
  time: any;
  datePickerConfig = {
    isAnimated: true,
    dateInputFormat: 'DD MMMM YYYY',
    containerClass: 'theme-default'
  }
  constructor(
    private localeService: BsLocaleService,
  ) {
    this.time = {
      hour: this.selectedDate ? this.selectedDate.getHours() : 0,
      minute: this.selectedDate ? this.selectedDate.getMinutes() : 0
    };
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.localeService.use('es');
  }

  onDatePickerChange(event: Date) {
    event.setHours(this.time.hour);
    event.setMinutes(this.time.minute);
    event.setSeconds(0);
    this.selectedDate = event;
  }

  onTimerChange() {
    this.selectedDate = this.selectedDate ? this.selectedDate : new Date();
    this.selectedDate.setHours(this.time.hour);
    this.selectedDate.setMinutes(this.time.minute);
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
