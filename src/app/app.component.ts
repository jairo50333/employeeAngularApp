import { Component, Inject } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';
import { LoadingService } from './shared/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeApp';

  idEmployee: number | null = null;
  constructor(
    private employeeService: EmployeeService,
    @Inject(LoadingService) public loaderService: LoadingService,
    ) {

  }
  ngOnInit() { }
  employees: Employee[] = [];
  disableButton : boolean=false;

  getEmployees() {
    this.loaderService.setLoading(true);
    this.employees = [];
    this.disableButton = true;

    if (this.idEmployee != null) {

      this.employeeService.getEmployeeById(this.idEmployee).subscribe(x => {
        this.loaderService.setLoading(false);
        this.disableButton = false;
        if (x != null) {
          this.employees.push(x);
        }

      })

    } else {
      this.employeeService.getAllEmployees().subscribe(x => {
        this.disableButton = false;

        this.employees = x;
        this.loaderService.setLoading(false);

      })

    }
  }

}

