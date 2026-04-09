import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlainDemo} from './plain-demo';

describe('PlainDemo', () => {
  let component: PlainDemo;
  let fixture: ComponentFixture<PlainDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(PlainDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
