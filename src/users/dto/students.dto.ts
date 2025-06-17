import { ApiProperty } from '@nestjs/swagger';
import { Student, $Enums } from '@prisma/client';

export class ReturnedStudentsDto implements Partial<Student> {
    @ApiProperty({
        description: 'Unique identifier for the students',
        example: '124abc'
    })
    studentId: string;

    @ApiProperty({
        description: 'Department where students belong to',
        example: 'Computer Science'
    })
    department: string

    @ApiProperty({
        description: 'Students assigned email',
        example: 'bigburr@gmail.com'
    })
    email: string

    @ApiProperty({
        description: 'name of the student',
        example: ' burr'
    })
    name: string

    @ApiProperty({
        description: 'Role of the students',
        enum: $Enums.Role,
        example: '$Enums.Role.Student'
    })
    role: $Enums.Role

}