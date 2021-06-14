import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrecordsComponent } from './displayrecords.component';

describe('DisplayrecordsComponent', () => {
  let component: DisplayrecordsComponent;
  let fixture: ComponentFixture<DisplayrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayrecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
