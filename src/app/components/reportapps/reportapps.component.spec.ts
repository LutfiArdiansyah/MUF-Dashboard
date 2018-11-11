import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportappsComponent } from './reportapps.component';

describe('ReportappsComponent', () => {
  let component: ReportappsComponent;
  let fixture: ComponentFixture<ReportappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
