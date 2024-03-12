import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSuppliersComponent } from './tabla-suppliers.component';

describe('TablaSuppliersComponent', () => {
  let component: TablaSuppliersComponent;
  let fixture: ComponentFixture<TablaSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaSuppliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
