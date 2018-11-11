export class MufDashboard {
}

export class Branch {
    BRANCH_CODE:string = '';
    BRANCH_NAME:string = '';
    BRANCH_PARENT:string = '';
    f_checked:boolean = false;
    f_disabled:boolean = false;
}

export class MonthlyUsage {
    name:string = '';
    series:MonthlyUsageData[]=[{name:'',value:0}];
}

export class MonthlyUsageData {
    name:string = '';
    value:number = 0;
}

export class Parameter {
    MONTH: Array<string>=[];
    YEAR: Array<string>=[];
    BRANCH_CODE: Array<string>=[];
    SOURCE__APP_CODE: Array<string>=[];
}