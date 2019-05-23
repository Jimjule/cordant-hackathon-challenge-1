import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshButKeenComponent } from './fresh-but-keen.component';

describe('FreshButKeenComponent', () => {
  let component: FreshButKeenComponent;
  let fixture: ComponentFixture<FreshButKeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshButKeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshButKeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
