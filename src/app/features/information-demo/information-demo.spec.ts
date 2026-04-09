import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InformationDemo} from './information-demo';

describe('InformationDemo', () => {
  let component: InformationDemo;
  let fixture: ComponentFixture<InformationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
