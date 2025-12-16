import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftedWithCareComponent } from './crafted-with-care.component';

describe('CraftedWithCareComponent', () => {
  let component: CraftedWithCareComponent;
  let fixture: ComponentFixture<CraftedWithCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CraftedWithCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftedWithCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
