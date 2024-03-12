import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGamesComponent } from './tabla-games.component';

describe('TablaGamesComponent', () => {
  let component: TablaGamesComponent;
  let fixture: ComponentFixture<TablaGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
