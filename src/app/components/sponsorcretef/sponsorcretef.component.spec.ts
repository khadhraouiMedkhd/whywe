import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorcretefComponent } from './sponsorcretef.component';

describe('SponsorcretefComponent', () => {
  let component: SponsorcretefComponent;
  let fixture: ComponentFixture<SponsorcretefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorcretefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorcretefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
