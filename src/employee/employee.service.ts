import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';


@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) { }

    async createEmployee(employeeData: any) : Promise<any> {
        try {
            return await this.employeeRepository.save(employeeData)
        } catch (error) {
            throw error
        }
    }
    
    async getEmployees(): Promise<EmployeeEntity[]> {
        try {
            const employees: EmployeeEntity[] = await this.employeeRepository.find({
                where: {
                    is_active: true
                }
            });
            if (employees.length == 0 ) {
                throw new NotFoundException('Employees not Found')
            }
            return employees
        } catch (error) {
            throw error
        }
    }

    async getEmployeeById(id: number): Promise<EmployeeEntity> {
        try {
            const employeeDetail = await this.employeeRepository.findOne({
                where: { 
                    id: id ,
                    is_active: true
                }
            })
            if (!employeeDetail) {
                throw new NotFoundException('Employee not Found')
            }
            return employeeDetail
        } catch (error) {
            throw error
        }
    }

    async updateEmployee(employee: any, id: number) {
        try {
            let updatedEmployee = await this.employeeRepository.update(id, employee)
            if (updatedEmployee) {
                return await this.employeeRepository.findOne({
                    where: {
                        id: id , 
                        is_active: true
                    }
                })
            }
        } catch (error) {
            throw error
        }
    }

    async deleteEmployee(id: number) {
        try {
            let employeeDetail = await this.employeeRepository.findOne({
                where: { 
                    id: id , 
                    is_active: true
                }
            })
            if (!employeeDetail) {
                throw new NotFoundException('No Employee Found')
            }

            let result = await this.employeeRepository.update(id, {
                is_active: false
            })
            if (result) {
                return `Employee Deleted Successfully`
            }
        } catch (error) {
            throw error
        }
    }
}