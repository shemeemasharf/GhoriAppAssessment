import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-promotion',
  standalone: false,
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200, // animation duration
      once: false,    // triggers animation every scroll
      mirror: true    // animate out when scrolling past
    });
  }

}
