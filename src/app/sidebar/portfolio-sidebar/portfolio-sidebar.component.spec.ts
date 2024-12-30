import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSidebarComponent } from './portfolio-sidebar.component';

describe('PortfolioSidebarComponent', () => {
  let component: PortfolioSidebarComponent;
  let fixture: ComponentFixture<PortfolioSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSidebarComponent]
    });
    fixture = TestBed.createComponent(PortfolioSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
