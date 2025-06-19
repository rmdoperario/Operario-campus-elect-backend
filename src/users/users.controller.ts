
import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { ReturnedStudentsDto } from 'src/users/dto/students.dto'
import { Student } from '@prisma/client'


@Controller('users')
export class UsersController { 
    constructor(private readonly usersService: UsersService){}

    @Get('students')
    @ApiOperation({
        summary: 'Get all students',
        description: 'Return all list of all students in the system.'
    })
    @ApiResponse({
        status: 200,
        description: 'List of students retried succesfully',
        type: [ReturnedStudentsDto]
    })
    @ApiResponse({
        status: 500,
        description: 'Theres something wrong',
    })
    async findAllStudents():Promise<Student[]> {
        return await this.usersService.findAllStudents()
    }
    @Get('students/find')
    async findStudentById(
        @Query ('id') id: Student['studentId']
    ) {
        return await this.usersService.findStudentById({
            id: id
        })
    }
}