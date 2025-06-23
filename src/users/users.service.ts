import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Student } from '@prisma/client'
import { NotFoundException }  from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    /**
     * Retrieves all students from the DATABASE
     * @returns a promise that resolves an array of student objects
     */
    async findAllStudents(): Promise<Student[]> {
        return this.prisma.student.findMany()
    }

    async findStudentById({ id }: {id: Student['studentId']}): Promise<Student> {
        const student = await this.prisma.student.findUnique({
            where: {
                studentId: id
            }
        })

        if (!student) {
            //Use NotFoundException for proper HTP handling
            //@see @nest/common
            throw new NotFoundException('Student not found.')
        }
        
        return student;

    }

    async createStudent(data: {
        studentId: string;
        name: string;
        email: string;
        department: string;
        createdAt?: Date| string;
    }): Promise<Student> {
        return this.prisma.student.create({
            data: data
        });
    }
}