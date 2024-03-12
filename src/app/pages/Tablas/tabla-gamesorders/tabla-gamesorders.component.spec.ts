import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGamesordersComponent } from './tabla-gamesorders.component';

describe('TablaGamesordersComponent', () => {
  let component: TablaGamesordersComponent;
  let fixture: ComponentFixture<TablaGamesordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaGamesordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaGamesordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
