import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorFComponent } from './sponsor-f.component';

describe('SponsorFComponent', () => {
  let component: SponsorFComponent;
  let fixture: ComponentFixture<SponsorFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
