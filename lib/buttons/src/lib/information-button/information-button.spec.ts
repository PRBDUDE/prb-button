import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InformationButton} from './information-button';

describe('InformationButtonComponent', () => {
  let component: InformationButton;
  let fixture: ComponentFixture<InformationButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationButton]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
