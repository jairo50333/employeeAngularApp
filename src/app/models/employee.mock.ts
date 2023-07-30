import { Employee } from "./employee.model";

export const generateOneEmployee = (): Employee => {

    return {
        id: 1,
        employee_name: "employee_name test",
        employee_salary: 123,
        employee_anual_salary : 123*12,
        employee_age: 2,
        profile_image: "",

    }
}


export const generateManyEmployees = (size = 10) => {
    return new Array(size)
        .fill(null)
        .map(() => ({ ...generateOneEmployee() }));
}
