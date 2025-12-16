import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-most-loved',
  standalone: false,
  templateUrl: './most-loved.component.html',
  styleUrls: ['./most-loved.component.scss']
})
export class MostLovedComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200, // animation speed in ms
      once: false,    // triggers animation every scroll
      mirror: true    // animate out while scrolling past
    });
  }

}
