import { Body, Controller ,Delete,Get, Param,Post,Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { post } from 'superagent';
import { Employee } from './schema/employee-schema';
 
@Controller('employee')
export class EmployeeController {
    constructor(private employeeService:EmployeeService){}
 
    @Get()
    async getAll(){
        return await this.employeeService.getAll();
        
    }
   /*  @Get('/:id')
    async getByid(@Param("id") id : string){
        //console.log(id);
        return await this.employeeService.getById(id);

    } */
    @Post('/log')
    async login(@Body('login') login: string, @Body('password') password: string) {
      // Vous pouvez maintenant utiliser 'login' et 'password' dans votre logique de connexion
      console.log('Login:', login);
      console.log('Password:', password);
      // Ajoutez votre logique de connexion ici
    }

    @Get('/:FR')
    async TEST(@Param("FR") VAL : string){
        //console.log(id);
        console.log("val =",VAL)
return VAL;
    }

    @Delete('/:id')
    async Delete(@Param("id") id){
       // console.log(id);
        return await this.employeeService.Delete(id);
    }
    @Post()
  async Create (@Body() empl :Employee) {
    return await this.employeeService.create(empl);
}
@Put('/:id')
async update(@Param("id") id,@Body()employee: Employee){
    return await this.employeeService.edit(id,employee);
}
}