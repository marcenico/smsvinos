import { Component, OnInit, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class navbarComponent implements OnInit {
  public solidNavbar: boolean = false;
  private myScrollContainer: ElementRef;
  constructor() {}

  ngOnInit() {}

  scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowsScroll($event: Event) {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.solidNavbar = number > 100 ? true : false;
  }
}
