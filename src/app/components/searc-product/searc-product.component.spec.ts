import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcProductComponent } from './search-product.component';

describe('SearcProductComponent', () => {
  let component: SearcProductComponent;
  let fixture: ComponentFixture<SearcProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
