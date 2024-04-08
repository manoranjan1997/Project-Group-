import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHousekeeperComponent } from './register-housekeeper.component';

describe('RegisterHousekeeperComponent', () => {
  let component: RegisterHousekeeperComponent;
  let fixture: ComponentFixture<RegisterHousekeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHousekeeperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterHousekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
