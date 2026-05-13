import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCocktailsList } from './admin-cocktails-list';

describe('AdminCocktailsList', () => {
  let component: AdminCocktailsList;
  let fixture: ComponentFixture<AdminCocktailsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCocktailsList],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCocktailsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
