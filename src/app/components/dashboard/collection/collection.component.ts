import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Branch, MonthlyUsage } from 'src/app/entity/muf-dashboard';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  data = {
    "chart": {
      "caption": "Expense Analysis",
      "subcaption": "ACME Inc.",
      "xaxisname": "Region",
      "yaxisname": "Amount (In USD)",
      "numberprefix": "$",
      "exportenabled": "1",
      "theme": "zune"
    },
    "categories": [
      {
        "category": [
          {
            "label": "East"
          },
          {
            "label": "West"
          },
          {
            "label": "South"
          },
          {
            "label": "North"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Actual Expenses",
        "data": [
          {
            "value": "1441290"
          },
          {
            "value": "855912"
          },
          {
            "value": "911404"
          },
          {
            "value": "648136"
          }
        ]
      },
      {
        "seriesname": "Budgeted Expenses",
        "renderas": "line",
        "data": [
          {
            "value": "1297430"
          },
          {
            "value": "776485"
          },
          {
            "value": "685352"
          },
          {
            "value": "726791"
          }
        ]
      }
    ]
  };

  data_bar = {
    "chart": {
      "caption": "App Publishing Trend",
      "subcaption": "2012-2016",
      "xaxisname": "Years",
      "yaxisname": "Total number of apps in store",
      "formatnumberscale": "1",
      "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      "theme": "zune",
      "exportenabled": "1",
      "drawcrossline": "1"
      
    },
    "categories": [
      {
        "category": [
          {
            "label": "2012"
          },
          {
            "label": "2013"
          },
          {
            "label": "2014"
          },
          {
            "label": "2015"
          },
          {
            "label": "2016"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "iOS App Store",
        "data": [
          {
            "value": "125000"
          },
          {
            "value": "300000"
          },
          {
            "value": "480000"
          },
          {
            "value": "800000"
          },
          {
            "value": "1100000"
          }
        ]
      },
      {
        "seriesname": "Google Play Store",
        "data": [
          {
            "value": "70000"
          },
          {
            "value": "150000"
          },
          {
            "value": "350000"
          },
          {
            "value": "600000"
          },
          {
            "value": "1400000"
          }
        ]
      },
      {
        "seriesname": "Amazon AppStore",
        "data": [
          {
            "value": "10000"
          },
          {
            "value": "100000"
          },
          {
            "value": "300000"
          },
          {
            "value": "600000"
          },
          {
            "value": "900000"
          }
        ]
      }
    ]
  };

  data_2 = {
    "chart": {
      "caption": "Expense Analysis",
      "subcaption": "ACME Inc.",
      "xaxisname": "Region",
      "yaxisname": "Amount (In USD)",
      "numberprefix": "$",
      "exportenabled": "1",
      "theme": "zune"
    },
    "categories": [
      {
        "category": [
          {
            "label": "East"
          },
          {
            "label": "West"
          },
          {
            "label": "South"
          },
          {
            "label": "North"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Actual Expenses",
        "data": [
          {
            "value": "1441290"
          },
          {
            "value": "855912"
          },
          {
            "value": "911404"
          },
          {
            "value": "648136"
          }
        ]
      },
      {
        "seriesname": "Budgeted Expenses",
        "renderas": "line",
        "data": [
          {
            "value": "1297430"
          },
          {
            "value": "776485"
          },
          {
            "value": "685352"
          },
          {
            "value": "726791"
          }
        ]
      },
      {
        "seriesname": "Budgeted Expenses1",
        "renderas": "line",
        "data": [
          {
            "value": "1441290"
          },
          {
            "value": "855912"
          },
          {
            "value": "911404"
          },
          {
            "value": "648136"
          }
        ]
      }
    ]
  };

  data_3 = {
    "chart": {
      "caption": "Expense Analysis",
      "subcaption": "ACME Inc.",
      "xaxisname": "Region",
      "yaxisname": "Amount (In USD)",
      "numberprefix": "$",
      "exportenabled": "1",
      "theme": "zune"
    },
    "categories": [
      {
        "category": [
          {
            "label": "East"
          },
          {
            "label": "West"
          },
          {
            "label": "South"
          },
          {
            "label": "North"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Actual Expenses",
        "data": [
          {
            "value": "1441290"
          },
          {
            "value": "855912"
          },
          {
            "value": "911404"
          },
          {
            "value": "648136"
          }
        ]
      },
      {
        "seriesname": "Actual Expenses2",
        "data": [
          {
            "value": "1297430"
          },
          {
            "value": "776485"
          },
          {
            "value": "685352"
          },
          {
            "value": "726791"
          }
        ]
      },
      {
        "seriesname": "Budgeted Expenses1",
        "renderas": "line",
        "data": [
          {
            "value": "1441290"
          },
          {
            "value": "855912"
          },
          {
            "value": "911404"
          },
          {
            "value": "648136"
          }
        ]
      }
    ]
  };

  data_line = {
    "chart": {
      "caption": "Reach of Social Media Platforms amoung youth",
      "yaxisname": "% of youth on this platform",
      "subcaption": "2012-2016",
      "showhovereffect": "1",
      "numbersuffix": "%",
      "drawcrossline": "1",
      "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
      "exportenabled": "1",
      "theme": "zune"
    },
    "categories": [
      {
        "category": [
          {
            "label": "2012"
          },
          {
            "label": "2013"
          },
          {
            "label": "2014"
          },
          {
            "label": "2015"
          },
          {
            "label": "2016"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Facebook",
        "data": [
          {
            "value": "62"
          },
          {
            "value": "64"
          },
          {
            "value": "64"
          },
          {
            "value": "66"
          },
          {
            "value": "78"
          }
        ]
      },
      {
        "seriesname": "Instagram",
        "data": [
          {
            "value": "16"
          },
          {
            "value": "28"
          },
          {
            "value": "34"
          },
          {
            "value": "42"
          },
          {
            "value": "54"
          }
        ]
      },
      {
        "seriesname": "LinkedIn",
        "data": [
          {
            "value": "20"
          },
          {
            "value": "22"
          },
          {
            "value": "27"
          },
          {
            "value": "22"
          },
          {
            "value": "29"
          }
        ]
      },
      {
        "seriesname": "Twitter",
        "data": [
          {
            "value": "18"
          },
          {
            "value": "19"
          },
          {
            "value": "21"
          },
          {
            "value": "21"
          },
          {
            "value": "24"
          }
        ]
      }
    ]
  };

  data_stack_coloumn = {
    "chart": {
      "caption": "Yearly Energy Production Rate",
      "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " TWh",
      "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "zune",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Canada"
          },
          {
            "label": "China"
          },
          {
            "label": "Russia"
          },
          {
            "label": "Australia"
          },
          {
            "label": "United States"
          },
          {
            "label": "France"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Coal",
        "data": [
          {
            "value": "400"
          },
          {
            "value": "830"
          },
          {
            "value": "500"
          },
          {
            "value": "420"
          },
          {
            "value": "790"
          },
          {
            "value": "380"
          }
        ]
      },
      {
        "seriesname": "Hydro",
        "data": [
          {
            "value": "350"
          },
          {
            "value": "620"
          },
          {
            "value": "410"
          },
          {
            "value": "370"
          },
          {
            "value": "720"
          },
          {
            "value": "310"
          }
        ]
      },
      {
        "seriesname": "Nuclear",
        "data": [
          {
            "value": "210"
          },
          {
            "value": "400"
          },
          {
            "value": "450"
          },
          {
            "value": "180"
          },
          {
            "value": "570"
          },
          {
            "value": "270"
          }
        ]
      },
      {
        "seriesname": "Gas",
        "data": [
          {
            "value": "180"
          },
          {
            "value": "330"
          },
          {
            "value": "230"
          },
          {
            "value": "160"
          },
          {
            "value": "440"
          },
          {
            "value": "350"
          }
        ]
      },
      {
        "seriesname": "Oil",
        "data": [
          {
            "value": "60"
          },
          {
            "value": "200"
          },
          {
            "value": "200"
          },
          {
            "value": "50"
          },
          {
            "value": "230"
          },
          {
            "value": "150"
          }
        ]
      }
    ]
  };

  data_gauge = [
    {
      "name": "Germany",
      "value": 40632
    }
  ];

  width = 0.41 * screen.width;
  full_widt = 0.88 * screen.width;
  height = 0.5 * screen.height;
  type = 'mscombi2d';
  dataFormat = 'json';
  dataSource = this.data;

  type_bar = 'mscolumn2d';
  dataSourceBar = this.data_bar;
  dataSource2 = this.data_2;
  dataSource3 = this.data_3;

  type_line = 'msline';
  dataSourceLine = this.data_line;

  type_stack_col = 'stackedcolumn2d';
  dataSourceStackCol = this.data_stack_coloumn;

  collapsed: boolean = true;

  // options gauge
  animations = true;
  showLegend = false;
  view_gauge = [0.27 * screen.width, 0.5 * screen.height];
  view_gauge2 = [0.42 * screen.width, 0.5 * screen.height];
  view_card = [0.43 * screen.width];

  colorScheme = 'cool';


  constructor(private services: ServicesService) {
  }

  ngOnInit() {
  }
}
