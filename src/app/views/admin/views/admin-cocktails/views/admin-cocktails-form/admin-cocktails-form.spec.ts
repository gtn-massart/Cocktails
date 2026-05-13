import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCocktailsForm } from './admin-cocktails-form';

describe('AdminCocktailsForm', () => {
  let component: AdminCocktailsForm;
  let fixture: ComponentFixture<AdminCocktailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCocktailsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCocktailsForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
