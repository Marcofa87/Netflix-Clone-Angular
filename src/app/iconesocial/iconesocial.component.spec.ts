import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesocialComponent } from './iconesocial.component';

describe('IconesocialComponent', () => {
  let component: IconesocialComponent;
  let fixture: ComponentFixture<IconesocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconesocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconesocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
