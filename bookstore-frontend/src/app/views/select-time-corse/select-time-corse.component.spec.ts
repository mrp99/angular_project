import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTimeCorseComponent } from './select-time-corse.component';

describe('SelectTimeCorseComponent', () => {
  let component: SelectTimeCorseComponent;
  let fixture: ComponentFixture<SelectTimeCorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTimeCorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTimeCorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
