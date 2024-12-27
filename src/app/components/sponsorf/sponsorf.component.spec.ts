import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorfComponent } from './sponsorf.component';

describe('SponsorfComponent', () => {
  let component: SponsorfComponent;
  let fixture: ComponentFixture<SponsorfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
