import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConsolessalesComponent } from './tabla-consolessales.component';

describe('TablaConsolessalesComponent', () => {
  let component: TablaConsolessalesComponent;
  let fixture: ComponentFixture<TablaConsolessalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaConsolessalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaConsolessalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
