import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { addEmployeeDto } from './dto/addEmployee.dto';
import { updateEmployeeDto } from './dto/updateEmployee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller({
    version: "1",
    path: 'employee'
})
export class EmployeeController {
    constructor(private service: EmployeeService) { }

    @Post('/add')
    @ApiOperation({
        description: 'Add employee'
    })
    @ApiResponse({ status: 200, description: 'Employee Created Succesfully'})
    async create(@Body() employee: addEmployeeDto) {
        try {
            return this.service.createEmployee(employee);
        } catch (error) {
            return error
        }
    }

    @Get('/')
    @ApiOperation({
        description: 'Fetch the list of employees'
    })
    @ApiResponse({ status: 200, description: 'Employees Fetched Succesfully'})
    async getAllEmployees(){
        try {
          let result = await this.service.getEmployees();
          return result
        } catch (error) {
            return error
        }
    }

    @Get(':id')
    @ApiOperation({
        description: 'Get the particular employee by id'
    })
    @ApiResponse({ status: 200, description: 'Given Employee Fetched'})
    async fetchEmployeeById(@Param('id') id: number) {
        try {
          let result = await this.service.getEmployeeById(id);
          return result
        } catch (error) {
            return error
        }
    }

    @Put('/update/:id')
    @ApiOperation({
        description: 'Update the particular employee by id'
    })
    @ApiResponse({ status: 200, description: 'Employee Updated Succesfully'})
    async update(@Body() employee: updateEmployeeDto, @Param('id') id: number) {
    try {
        let result = this.service.updateEmployee(employee, id);
        return result
    } catch (error) {
        return error
    }
    }

    @Delete('/delete/:id')
    @ApiOperation({
        description: 'Delete the particular employee by id'
    })
    @ApiResponse({ status: 200, description: 'Employee Deleted'})
    async deleteEmployee(@Param('id') id: number) {
        try {
            return await this.service.deleteEmployee(id);
        } catch (error) {
            return error
        }
    }
}