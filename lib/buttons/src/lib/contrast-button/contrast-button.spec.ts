import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContrastButton} from './contrast-button';

describe('ContrastButtonComponent', () => {
  let component: ContrastButton;
  let fixture: ComponentFixture<ContrastButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContrastButton]
    }).compileComponents();

    fixture = TestBed.createComponent(ContrastButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
