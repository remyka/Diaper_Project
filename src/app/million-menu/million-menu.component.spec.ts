import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillionMenuComponent } from './million-menu.component';

describe('MillionMenuComponent', () => {
  let component: MillionMenuComponent;
  let fixture: ComponentFixture<MillionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
