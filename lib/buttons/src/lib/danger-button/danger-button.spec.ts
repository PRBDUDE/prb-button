import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DangerButton} from './danger-button';

describe('DangerButtonComponent', () => {
  let component: DangerButton;
  let fixture: ComponentFixture<DangerButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerButton]
    }).compileComponents();

    fixture = TestBed.createComponent(DangerButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
