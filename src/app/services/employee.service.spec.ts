import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { generateManyEmployees, generateOneEmployee } from '../models/employee.mock';
import { environment } from 'src/environments/environment.development';

fdescribe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpController: HttpTestingController;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    employeeService = TestBed.inject(EmployeeService);
    httpController = TestBed.inject(HttpTestingController);

  });



  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });


  afterEach(() => {
    httpController.verify();
  })

  describe("test getAllEmployees", () => {

    it("should return a employee list", (doneFn) => {
      //aaa
      //arrange
      const mockData: Employee[] = generateManyEmployees(2);

      employeeService.getAllEmployees().subscribe(employees => {
        //assert
        expect(employees.length).toEqual(mockData.length);
        expect(employees).toEqual(mockData);

        doneFn();
      })
      //act
      const url = `${environment.API_URL}Employee/GetEmployees/`
      const req = httpController.expectOne(url);
      req.flush(mockData);
      //assert
    })
  })

  describe("test getEmployeeById", () => {

    it("should return a employee", (doneFn) => {
      //aaa
      //arrange
      const mockData: Employee = generateOneEmployee();

      employeeService.getEmployeeById(1).subscribe(employees => {
        //assert
        expect(employees).toEqual(mockData);

        doneFn();
      })
      //act
      const url = `${environment.API_URL}Employee/GetEmployeeById/1`
      const req = httpController.expectOne(url);
      req.flush(mockData);
      //assert
    })
  })



});
