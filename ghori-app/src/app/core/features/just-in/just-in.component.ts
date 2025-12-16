
import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-just-in',
    standalone: false,
  templateUrl: './just-in.component.html',
  styleUrls: ['./just-in.component.scss']
})
export class JustInComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false,    // whether animation happens only once while scrolling down
      mirror: true    // whether elements animate out while scrolling past them
    });
  }

}
