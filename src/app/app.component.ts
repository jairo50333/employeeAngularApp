import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeApp';

  idEmployee: number | null = null;
  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() { }
  employees: Employee[] = [];

  getEmployees() {
    if (this.idEmployee != null) {

      this.employeeService.getEmployeeById(this.idEmployee).subscribe(x => {
        this.employees = [];
        if (x != null) {
          this.employees.push(x);

        }
      })

    } else {
      this.employeeService.getAllEmployees().subscribe(x => {
        console.log(x);
        this.employees = x;
      })

    }
  }

}

