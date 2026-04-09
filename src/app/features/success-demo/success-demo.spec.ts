import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SuccessDemo} from './success-demo';

describe('SuccessDemo', () => {
  let component: SuccessDemo;
  let fixture: ComponentFixture<SuccessDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
