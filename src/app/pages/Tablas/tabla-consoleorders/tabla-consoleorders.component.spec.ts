import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConsoleordersComponent } from './tabla-consoleorders.component';

describe('TablaConsoleordersComponent', () => {
  let component: TablaConsoleordersComponent;
  let fixture: ComponentFixture<TablaConsoleordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaConsoleordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaConsoleordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
