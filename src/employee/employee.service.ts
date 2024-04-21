import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schema/employee-schema';
 
@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) 
    private employeeModel: Model<EmployeeDocument>,
  ) {}
 
  async getAll() {
    return await this.employeeModel.find().exec();
  }
  async getById(id :string ) {
    return await this.employeeModel.findById(id).exec();
  }
  async Delete(id :string ) {
    console.log("test  "+id)
   //console.log("test" + this.getById(id)) ;
    return await this.employeeModel.findByIdAndDelete(id);
  }
  
   async create(employee: Employee) {
    console.log(employee);
    const newEmployee = new this.employeeModel(employee);
    return await newEmployee.save();
  }
async edit(id :string, employee: Employee){
  return this.employeeModel.findByIdAndUpdate(id,employee);
}

}