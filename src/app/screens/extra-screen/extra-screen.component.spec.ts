import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraScreenComponent } from './extra-screen.component';

describe('ExtraScreenComponent', () => {
  let component: ExtraScreenComponent;
  let fixture: ComponentFixture<ExtraScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraScreenComponent]
    });
    fixture = TestBed.createComponent(ExtraScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
