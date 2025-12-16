import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleMomentComponent } from './style-moment.component';

describe('StyleMomentComponent', () => {
  let component: StyleMomentComponent;
  let fixture: ComponentFixture<StyleMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleMomentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
