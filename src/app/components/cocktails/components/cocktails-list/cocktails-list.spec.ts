import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsList } from './cocktails-list';

describe('CocktailsList', () => {
  let component: CocktailsList;
  let fixture: ComponentFixture<CocktailsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsList],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
