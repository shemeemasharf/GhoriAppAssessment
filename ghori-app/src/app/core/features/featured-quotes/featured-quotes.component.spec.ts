import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedQuotesComponent } from './featured-quotes.component';

describe('FeaturedQuotesComponent', () => {
  let component: FeaturedQuotesComponent;
  let fixture: ComponentFixture<FeaturedQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedQuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
