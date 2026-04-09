import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlainButton} from './plain-button';

describe('PlainButtonComponent', () => {
  let component: PlainButton;
  let fixture: ComponentFixture<PlainButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainButton]
    }).compileComponents();

    fixture = TestBed.createComponent(PlainButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
