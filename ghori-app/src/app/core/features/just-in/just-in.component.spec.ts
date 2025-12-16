import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustInComponent } from './just-in.component';

describe('JustInComponent', () => {
  let component: JustInComponent;
  let fixture: ComponentFixture<JustInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JustInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
