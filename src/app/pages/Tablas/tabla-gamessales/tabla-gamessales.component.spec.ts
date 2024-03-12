import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGamessalesComponent } from './tabla-gamessales.component';

describe('TablaGamessalesComponent', () => {
  let component: TablaGamessalesComponent;
  let fixture: ComponentFixture<TablaGamessalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaGamessalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaGamessalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
