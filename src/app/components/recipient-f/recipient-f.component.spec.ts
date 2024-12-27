import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFComponent } from './recipient-f.component';

describe('RecipientFComponent', () => {
  let component: RecipientFComponent;
  let fixture: ComponentFixture<RecipientFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
