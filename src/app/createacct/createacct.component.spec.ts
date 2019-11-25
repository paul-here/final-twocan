import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateacctComponent } from './createacct.component';

describe('CreateacctComponent', () => {
  let component: CreateacctComponent;
  let fixture: ComponentFixture<CreateacctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateacctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateacctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
