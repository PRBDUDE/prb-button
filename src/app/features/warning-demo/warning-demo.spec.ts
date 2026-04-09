import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WarningDemo} from './warning-demo';

describe('WarningDemo', () => {
  let component: WarningDemo;
  let fixture: ComponentFixture<WarningDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
