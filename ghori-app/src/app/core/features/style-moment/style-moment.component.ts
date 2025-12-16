import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-style-moment',
  standalone: false,
  templateUrl: './style-moment.component.html',
  styleUrls: ['./style-moment.component.scss']
})
export class StyleMomentComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200, // animation speed in ms
      once: false,    // allows animation every scroll
      mirror: true    // animate out while scrolling past
    });
  }
}
