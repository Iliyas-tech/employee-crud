import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export enum GenderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}

export class updateEmployeeDto {
    @ApiProperty({ type: String, example: 'John'})
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ type: String, required: false, example: 'Mark'})
    @IsOptional()
    @IsString()
    middle_name: string;

    @ApiProperty({ type: String, example: 'Doe'})
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({ type: String, example: 'Manager'})
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    designation: string;

    @ApiProperty({ type: String, enum: GenderEnum})
    @IsDefined()
    @IsEnum(GenderEnum)
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({ type: String, example: 'johndoe@google.com'})
    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    email_id: string;

    @ApiProperty({ type: String, example: '9550095500'})
    @IsDefined()
    @IsNotEmpty()
    mobile: string;
   

    @ApiProperty({ type: String, example: '2000-01-01'})
    @IsDefined()
    @IsNotEmpty()
    birth_date: Date;

    @ApiProperty({ type: String, example: '2023-01-01'})
    @IsDefined()
    @IsNotEmpty()
    date_of_joining: Date;

    @ApiProperty({ type: String, example: 'Road 10, Tarzan Building'})
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    address: string;
}