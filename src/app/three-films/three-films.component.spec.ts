import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFilmsComponent } from './three-films.component';

describe('ThreeFilmsComponent', () => {
  let component: ThreeFilmsComponent;
  let fixture: ComponentFixture<ThreeFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
