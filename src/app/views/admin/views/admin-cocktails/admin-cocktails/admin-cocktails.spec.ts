import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCocktails } from './admin-cocktails';

describe('AdminCocktails', () => {
  let component: AdminCocktails;
  let fixture: ComponentFixture<AdminCocktails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCocktails],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCocktails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
