import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatetoFormComponent } from './cateto-form.component';

describe('CatetoFormComponent', () => {
  let component: CatetoFormComponent;
  let fixture: ComponentFixture<CatetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatetoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
