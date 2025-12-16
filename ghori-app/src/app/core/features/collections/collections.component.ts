import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-collections',
  standalone: false,
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false,    // triggers animation every scroll
      mirror: true    // animate out when scrolling past
    });
  }

}
