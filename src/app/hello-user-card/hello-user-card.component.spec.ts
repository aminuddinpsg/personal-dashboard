import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloUserCardComponent } from './hello-user-card.component';

describe('HelloUserCardComponent', () => {
  let component: HelloUserCardComponent;
  let fixture: ComponentFixture<HelloUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
