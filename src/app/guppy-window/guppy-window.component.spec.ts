import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuppyWindowComponent } from './guppy-window.component';

describe('GuppyWindowComponent', () => {
  let component: GuppyWindowComponent;
  let fixture: ComponentFixture<GuppyWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuppyWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuppyWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
