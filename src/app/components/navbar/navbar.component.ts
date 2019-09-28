import { Component, OnInit, HostListener, Inject } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class navbarComponent implements OnInit {
  public solidNavbar: boolean = false;

  constructor() {}

  ngOnInit() {
    console.log(window.innerWidth);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowsScroll($event: Event) {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 100) {
      this.solidNavbar = true;
    } else if (this.solidNavbar && number < 10) {
      this.solidNavbar = false;
    }
  }
}
