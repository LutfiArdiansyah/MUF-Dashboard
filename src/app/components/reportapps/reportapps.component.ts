import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Branch, MonthlyUsage } from 'src/app/entity/muf-dashboard';

@Component({
  selector: 'app-reportapps',
  templateUrl: './reportapps.component.html',
  styleUrls: ['./reportapps.component.css']
})
export class ReportappsComponent implements OnInit {
  list_branchs: Branch[];
  months = [
    { name: 'January', value: '01', f_checked: false, f_disabled: false },
    { name: 'February', value: '02', f_checked: false, f_disabled: false },
    { name: 'March', value: '03', f_checked: false, f_disabled: false },
    { name: 'April', value: '04', f_checked: false, f_disabled: false },
    { name: 'May', value: '05', f_checked: false, f_disabled: false },
    { name: 'June', value: '06', f_checked: false, f_disabled: false },
    { name: 'July', value: '07', f_checked: false, f_disabled: false },
    { name: 'August', value: '08', f_checked: false, f_disabled: false },
    { name: 'September', value: '09', f_checked: false, f_disabled: false },
    { name: 'October', value: '10', f_checked: false, f_disabled: false },
    { name: 'November', value: '11', f_checked: false, f_disabled: false },
    { name: 'December', value: '12', f_checked: false, f_disabled: false }
  ];
  years = new Array();
  all_years = { f_checked_all_years: false, f_disabled_all_years: false };
  all_months = { f_checked_all_months: false, f_disabled_all_months: false };
  all_branchs = { f_checked_all_branchs: false, f_disabled_all_branchs: false };
  parameter2: { MONTH: Array<string>, YEAR: Array<string>, BRANCH_CODE: Array<string>, SOURCE_APP_CODE: Array<string> } = { BRANCH_CODE: [], MONTH: [], YEAR: [], SOURCE_APP_CODE: [] };

  jan = new MonthlyUsage();
  feb = new MonthlyUsage();
  mar = new MonthlyUsage();
  apr = new MonthlyUsage();
  may = new MonthlyUsage();
  jun = new MonthlyUsage();
  jul = new MonthlyUsage();
  aug = new MonthlyUsage();
  sep = new MonthlyUsage();
  oct = new MonthlyUsage();
  nov = new MonthlyUsage();
  dec = new MonthlyUsage();

  // options
  animations = true;
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Monthly Usage';
  timeline = true;
  view = [0.90 * screen.width, 0.5 * screen.height];
  view_gauge = [0.27 * screen.width, 0.5 * screen.height];
  view_card = [0.43 * screen.width];
  groupPadding = 5;
  barPadding = 3;

  colorScheme = 'cool';

  multi: any[];
  multi_acq: any[];
  multi_menu_acq: any[];
  multi_mssvy: any[];
  multi_job_mssvy: any[];
  f_ready: boolean = false;
  f_branch: boolean = false;
  f_years: boolean = false;
  f_month: boolean = false;
  f_monthly_usage: boolean = false;
  f_application_usage: boolean = false;
  f_menu_usage: boolean = false;
  f_job_usage: boolean = false;
  f_alert: boolean = false;
  branch: string = '';
  year: string = '';
  month: string = '';

  constructor(private services: ServicesService) {
    this.setTitle();
  }

  ngOnInit() {
    if (!this.list_branchs) {
      this.getBranch();
    }

    if (this.years.length == 0) {
      this.getYears();
    }
    this.parameter2.MONTH.push((new Date().getMonth() + 1).toString());
    this.parameter2.YEAR.push(new Date().getFullYear().toString());
    this.parameter2.BRANCH_CODE.push('0103');
    if (this.parameter2.BRANCH_CODE && this.parameter2.MONTH && this.parameter2.YEAR) {
      this.monthlyUsage();
      this.applicationUsage();
      this.menuUsage();
      this.jobUsage();
      this.setMonth();
    }
    this.setTitle();
  }

  getBranch() {
    this.services.getData('list_branch').subscribe(
      response => {
        if (response.status) {
          this.list_branchs = response.result;
          for (let index = 0; index < this.list_branchs.length; index++) {
            if (this.list_branchs[index].BRANCH_CODE == '0103') {
              this.list_branchs[index].f_checked = true;
            }
          }
        }
      }
    )
  }

  getYears() {
    let last_year = new Date().getFullYear();
    for (let index = 2015; index <= last_year; index++) {
      if (index.toString() == new Date().getFullYear().toString()) {
        this.years.push(
          { name: index.toString(), value: index.toString(), f_checked: true, f_disabled: false }
        );
      } else {
        this.years.push(
          { name: index.toString(), value: index.toString(), f_checked: false, f_disabled: false }
        );
      }
    }
  }

  allYears() {
    if (this.all_years.f_checked_all_years) {
      this.all_years.f_checked_all_years = true;
      this.years.forEach(element => {
        element.f_checked = true;
      });
    } else {
      this.all_years.f_checked_all_years = false;
      this.years.forEach(element => {
        element.f_checked = false;
      });
    }
    this.onClickYears();
  }

  allMonths() {
    if (this.all_months.f_checked_all_months) {
      this.months.forEach(element => {
        element.f_checked = true;
      });
    } else {
      this.months.forEach(element => {
        element.f_checked = false;
      });
    }
    this.onClickMonths();
  }

  allBranchs() {
    if (this.all_branchs.f_checked_all_branchs) {
      this.list_branchs.forEach(element => {
        element.f_checked = true;
      });
    } else {
      this.list_branchs.forEach(element => {
        element.f_checked = false;
      });
    }
    this.onClickBranch();
  }

  monthlyUsage() {
    this.f_monthly_usage = false;
    this.f_ready = false;
    this.parameter2.SOURCE_APP_CODE = [];
    this.parameter2.SOURCE_APP_CODE = ["01", "02"];
    if (this.parameter2.SOURCE_APP_CODE.length != 0) {
      this.services.postData('group_by_month', this.parameter2).subscribe(
        response => {
          this.jan.series.pop();
          this.feb.series.pop();
          this.mar.series.pop();
          this.apr.series.pop();
          this.may.series.pop();
          this.jun.series.pop();
          this.jul.series.pop();
          this.aug.series.pop();
          this.sep.series.pop();
          this.oct.series.pop();
          this.nov.series.pop();
          this.dec.series.pop();
          let total_loop: number;
          let loop: number = 0;
          if (response.result.group_by_month) {
            total_loop = response.result.group_by_month.length;
          }
          if (response.result.group_by_month) {
            response.result.group_by_month.forEach(element => {
              loop = loop + 1;
              if (element.MONTH == 'January') {
                if (element.APP == 'ACQ') {
                  this.jan.name = element.MONTH;
                  this.jan.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.jan.name = element.MONTH;
                  this.jan.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'February') {
                if (element.APP == 'ACQ') {
                  this.feb.name = element.MONTH;
                  this.feb.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.feb.name = element.MONTH;
                  this.feb.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'March') {
                if (element.APP == 'ACQ') {
                  this.mar.name = element.MONTH;
                  this.mar.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.mar.name = element.MONTH;
                  this.mar.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'April') {
                if (element.APP == 'ACQ') {
                  this.apr.name = element.MONTH;
                  this.apr.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.apr.name = element.MONTH;
                  this.apr.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'May') {
                if (element.APP == 'ACQ') {
                  this.may.name = element.MONTH;
                  this.may.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.may.name = element.MONTH;
                  this.may.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'June') {
                if (element.APP == 'ACQ') {
                  this.jun.name = element.MONTH;
                  this.jun.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.jun.name = element.MONTH;
                  this.jun.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'July') {
                if (element.APP == 'ACQ') {
                  this.jul.name = element.MONTH;
                  this.jul.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.jul.name = element.MONTH;
                  this.jul.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'August') {
                if (element.APP == 'ACQ') {
                  this.aug.name = element.MONTH;
                  this.aug.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.aug.name = element.MONTH;
                  this.aug.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'September') {
                if (element.APP == 'ACQ') {
                  this.sep.name = element.MONTH;
                  this.sep.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.sep.name = element.MONTH;
                  this.sep.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'October') {
                if (element.APP == 'ACQ') {
                  this.oct.name = element.MONTH;
                  this.oct.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.oct.name = element.MONTH;
                  this.oct.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'November') {
                if (element.APP == 'ACQ') {
                  this.nov.name = element.MONTH;
                  this.nov.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.nov.name = element.MONTH;
                  this.nov.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              } else if (element.MONTH == 'December') {
                if (element.APP == 'ACQ') {
                  this.dec.name = element.MONTH;
                  this.dec.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                } else if (element.APP == 'MUFSURVEY') {
                  this.dec.name = element.MONTH;
                  this.dec.series.push({ name: element.APP, value: parseInt(element.JUMLAH) })
                }
              }
            });
          }
          if (loop == total_loop) {
            this.multi = [this.jan, this.feb, this.mar, this.apr, this.may, this.jun, this.jul, this.aug, this.sep, this.oct, this.nov, this.dec];
            this.f_ready = true;
            this.f_monthly_usage = true;
          }
        }
      )
    }
  }

  applicationUsage() {
    this.f_ready = false;
    this.f_application_usage = false;
    let name_acq;
    let value_acq;
    let name_mufsurvey;
    let value_mufsurvey;
    this.parameter2.SOURCE_APP_CODE = [];
    this.parameter2.SOURCE_APP_CODE = ["01", "02"];
    if (this.parameter2.SOURCE_APP_CODE.length != 0) {
      this.services.postData('report', this.parameter2).subscribe(
        response => {
          response.result.group_by_source_app.forEach(element => {
            if (element.name == 'ACQ') {
              name_acq = element.name;
              value_acq = element.value;
            } else if (element.name == 'MUFSURVEY') {
              name_mufsurvey = element.name;
              value_mufsurvey = element.value;
            }
          });

          this.multi_acq = [{ name: name_acq, value: (parseInt(value_acq) / parseInt(response.result.total)) * 100 }];
          this.multi_mssvy = [{ name: name_mufsurvey, value: (parseInt(value_mufsurvey) / parseInt(response.result.total)) * 100 }];
          this.f_ready = true;
          this.f_application_usage = true;
        }
      )
    }
  }

  menuUsage() {
    this.f_menu_usage = false;
    this.f_ready = false;
    this.parameter2.SOURCE_APP_CODE = [];
    this.parameter2.SOURCE_APP_CODE = ["01"];
    if (this.parameter2.SOURCE_APP_CODE.length != 0) {
      this.services.postData('report', this.parameter2).subscribe(
        response => {
          this.multi_menu_acq = response.result.group_by_job;
          this.f_ready = true;
          this.f_menu_usage = true;
        }
      )
    }
  }

  jobUsage() {
    this.f_ready = false;
    this.f_job_usage = false;
    this.parameter2.SOURCE_APP_CODE = [];
    this.parameter2.SOURCE_APP_CODE = ["02"];
    if (this.parameter2.SOURCE_APP_CODE.length != 0) {
      this.services.postData('report', this.parameter2).subscribe(
        response => {
          this.multi_job_mssvy = response.result.group_by_job;
          this.f_ready = true;
          this.f_job_usage = true;
        }
      )
    }
  }

  onClickBranch() {
    this.parameter2.BRANCH_CODE = [];
    let f_loop = 0;
    let total_loop = this.list_branchs.length;
    this.list_branchs.forEach(element => {
      f_loop = f_loop + 1;
      if (element.f_checked) {
        this.parameter2.BRANCH_CODE.push(element.BRANCH_CODE);
      }
    });
    if (this.parameter2.BRANCH_CODE.length == 0) {
      this.f_branch = true;
      setTimeout(() => {
        this.f_branch = false;
      }, 3000);
    }

    if (f_loop == total_loop) {
      this.refresh();
    }
    this.setTitle();
  }

  onClickYears() {
    this.parameter2.YEAR = [];
    let f_loop = 0;
    let total_loop = this.years.length;
    this.years.forEach(element => {
      f_loop = f_loop + 1;
      if (element.f_checked) {
        this.parameter2.YEAR.push(element.value);
      }
    });
    if (this.parameter2.YEAR.length == 0) {
      this.f_years = true;
      setTimeout(() => {
        this.f_years = false;
      }, 3000);
    }
    if (f_loop == total_loop) {
      this.refresh();
    }
    this.setTitle();
  }

  onClickMonths() {
    this.parameter2.MONTH = [];
    let f_loop = 0;
    let total_loop = this.months.length;
    this.months.forEach(element => {
      f_loop = f_loop + 1;
      if (element.f_checked) {
        this.parameter2.MONTH.push(element.value);
      }
    });
    if (this.parameter2.MONTH.length == 0) {
      this.f_month = true;
      setTimeout(() => {
        this.f_month = false;
      }, 3000);
    }

    if (f_loop == total_loop) {
      this.refresh();
    }
    this.setTitle();
  }

  refresh() {
    this.f_alert = false;
    if (this.parameter2.BRANCH_CODE.length != 0 && this.parameter2.YEAR.length != 0 && this.parameter2.MONTH.length != 0) {
      this.monthlyUsage();
      this.applicationUsage();
      this.menuUsage();
      this.jobUsage();
    } else {
      this.f_alert = true;
      setTimeout(() => {
        this.f_alert = false;
      }, 3000)
    }
  }

  setMonth() {
    this.months.forEach(element => {
      if (element.value == (new Date().getMonth() + 1).toString()) {
        element.f_checked = true;
      }
    });
  }

  setTitle() {
    if (this.parameter2.BRANCH_CODE.length != 0) {
      this.branch = '';
      this.parameter2.BRANCH_CODE.forEach(element => {
        this.branch = this.branch + element + ',';
      });
      this.branch = this.branch.substring(0, this.branch.length - 1)
    }

    if (this.parameter2.YEAR.length != 0) {
      this.year = '';
      this.parameter2.YEAR.forEach(element => {
        this.year = this.year + element + ',';
      });
      this.year = this.year.substring(0, this.year.length - 1)
    }

    if (this.parameter2.MONTH.length != 0) {
      this.month = '';
      this.parameter2.MONTH.forEach(element => {
        this.month = this.month + element + ',';
      });
      this.month = this.month.substring(0, this.month.length - 1)
    }
  }
}
