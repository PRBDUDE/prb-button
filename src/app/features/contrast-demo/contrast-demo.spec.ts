import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContrastDemo} from './contrast-demo';

describe('ContrastDemo', () => {
  let component: ContrastDemo;
  let fixture: ComponentFixture<ContrastDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContrastDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(ContrastDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
