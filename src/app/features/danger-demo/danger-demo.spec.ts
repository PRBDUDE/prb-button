import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DangerDemo} from './danger-demo';

describe('DangerDemo', () => {
  let component: DangerDemo;
  let fixture: ComponentFixture<DangerDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(DangerDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
