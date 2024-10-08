import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavFilmsComponent } from './fav-films.component';

describe('FavFilmsComponent', () => {
  let component: FavFilmsComponent;
  let fixture: ComponentFixture<FavFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
