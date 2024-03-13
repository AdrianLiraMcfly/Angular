import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsolasComponent } from './form-consolas.component';

describe('FormConsolasComponent', () => {
  let component: FormConsolasComponent;
  let fixture: ComponentFixture<FormConsolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormConsolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
