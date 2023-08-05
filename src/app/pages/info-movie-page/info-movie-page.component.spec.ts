import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMoviePageComponent } from './info-movie-page.component';

describe('InfoMoviePageComponent', () => {
  let component: InfoMoviePageComponent;
  let fixture: ComponentFixture<InfoMoviePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMoviePageComponent]
    });
    fixture = TestBed.createComponent(InfoMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
