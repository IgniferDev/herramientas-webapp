import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamateriasScreenComponent } from './tablamaterias-screen.component';

describe('TablamateriasScreenComponent', () => {
  let component: TablamateriasScreenComponent;
  let fixture: ComponentFixture<TablamateriasScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablamateriasScreenComponent]
    });
    fixture = TestBed.createComponent(TablamateriasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
