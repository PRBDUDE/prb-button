import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimaryDemo} from './primary-demo';

describe('PrimaryDemo', () => {
  let component: PrimaryDemo;
  let fixture: ComponentFixture<PrimaryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
