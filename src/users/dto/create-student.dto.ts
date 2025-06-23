import { IsString, IsEmail, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Unique identifier for the student',
    example: 'STUDENT_4',
  })
  @IsString()
  studentId: string;

  @ApiProperty({
    description: 'Student’s assigned email',
    example: 'newstudent@addu.edu.ph',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Name of the student',
    example: 'New Student',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Department the student belongs to',
    example: 'Computer Science',
  })
  @IsString()
  department: string;

  @ApiProperty({
    description: 'Creation date of the student',
    example: '2025-06-23T12:04:00Z',
  })
  @IsDateString()
  createdAt: string;
}