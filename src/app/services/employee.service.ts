import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeController = 'Employee/'
  
  constructor(private http: HttpClient) {

  }



  getAllEmployees() {
    return this.http.get<Employee[]>(`${environment.API_URL}${this.employeeController}GetEmployees/`);
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(`${environment.API_URL}${this.employeeController}GetEmployeeById/${id}`);
  }



}
