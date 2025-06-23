import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiNotFoundResponse, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { ReturnedStudentsDto } from 'src/users/dto/students.dto';
import { Student } from '@prisma/client';
import { CreateStudentDto } from 'src/users/dto/create-student.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('students')
  @ApiOperation({
    summary: 'Get all students',
    description: 'Return all list of all students in the system.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of students retrieved successfully',
    type: [ReturnedStudentsDto],
  })
  @ApiResponse({
    status: 500,
    description: 'There’s something wrong',
  })
  @ApiQuery({ name: 'id', type: String, description: 'Student ID' })
  async findAllStudents(): Promise<Student[]> {
    return await this.usersService.findAllStudents();
  }

  @Get('students/find')
  @ApiOperation({
    summary: 'Finds students by ID',
    description: 'Returns a student that matches the provided ID.',
  })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'The unique identifier of the student to find.',
    example: 'STUDENT_1',
    type: 'string',
  })
  @ApiResponse({
    status: 200,
    description: 'Student found successfully.',
    type: ReturnedStudentsDto,
  })
  @ApiNotFoundResponse({
    description: 'Student not found.',
  })
  async findStudentById(@Query('id') id: Student['studentId']): Promise<Student> {
    return await this.usersService.findStudentById({
      id: id,
    });
  }

  @Post('students')
  @ApiOperation({
    summary: 'Create a new student',
    description: 'Creates a new student with the provided details.',
  })
  @ApiBody({
    type: CreateStudentDto,
    description: 'The student data to create',
    examples: {
      example1: {
        value: {
          studentId: 'STUDENT_4',
          email: 'newstudent@addu.edu.ph',
          name: 'New Student',
          department: 'Computer Science',
          createdAt: '2025-06-23T12:04:00Z',
        },
      },
    },
  })
   @ApiCreatedResponse({
    description: 'Student created successfully.',
    type: ReturnedStudentsDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, invalid data.',
  })
  async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.usersService.createStudent(createStudentDto);
  }
}