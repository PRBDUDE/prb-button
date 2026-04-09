import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondaryDemo} from './secondary-demo';

describe('SecondaryDemo', () => {
  let component: SecondaryDemo;
  let fixture: ComponentFixture<SecondaryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
