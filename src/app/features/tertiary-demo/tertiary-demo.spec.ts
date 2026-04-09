import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TertiaryDemo} from './tertiary-demo';

describe('TertiaryDemo', () => {
  let component: TertiaryDemo;
  let fixture: ComponentFixture<TertiaryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TertiaryDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(TertiaryDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
