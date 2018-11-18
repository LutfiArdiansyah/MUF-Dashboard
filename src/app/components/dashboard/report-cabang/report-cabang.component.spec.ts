import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCabangComponent } from './report-cabang.component';

describe('ReportCabangComponent', () => {
  let component: ReportCabangComponent;
  let fixture: ComponentFixture<ReportCabangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCabangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
