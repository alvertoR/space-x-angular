import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGaleryComponent } from './team-galery.component';

describe('TeamGaleryComponent', () => {
  let component: TeamGaleryComponent;
  let fixture: ComponentFixture<TeamGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
