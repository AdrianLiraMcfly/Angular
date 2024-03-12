import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConsolasComponent } from './tabla-consolas.component';

describe('TablaConsolasComponent', () => {
  let component: TablaConsolasComponent;
  let fixture: ComponentFixture<TablaConsolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaConsolasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
