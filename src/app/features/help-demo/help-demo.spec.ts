import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HelpDemo} from './help-demo';

describe('HelpDemo', () => {
  let component: HelpDemo;
  let fixture: ComponentFixture<HelpDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
