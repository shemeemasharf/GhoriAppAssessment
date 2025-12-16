import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1500, // animation duration in ms
      once: false,    // triggers animation every scroll
      mirror: true    // animate out when scrolling past
    });
  }

}
