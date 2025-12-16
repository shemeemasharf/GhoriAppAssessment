import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-crafted-with-care',
  standalone: false,
  templateUrl: './crafted-with-care.component.html',
  styleUrls: ['./crafted-with-care.component.scss']
})
export class CraftedWithCareComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true
    });
  }

}
