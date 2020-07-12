import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNeoComponent } from './show-neo.component';

describe('ShowNeoComponent', () => {
  let component: ShowNeoComponent;
  let fixture: ComponentFixture<ShowNeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
