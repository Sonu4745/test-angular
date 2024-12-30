import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskComponent } from './app-task.component';

describe('AppTaskComponent', () => {
  let component: AppTaskComponent;
  let fixture: ComponentFixture<AppTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTaskComponent]
    });
    fixture = TestBed.createComponent(AppTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
