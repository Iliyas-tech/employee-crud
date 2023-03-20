import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum GenderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}

@Entity({ name: 'employee'})
export class EmployeeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25, nullable: false })
    first_name: string;

    @Column({ length: 25, nullable: true })
    middle_name: string;

    @Column({ length: 25, nullable: false })
    last_name: string;

    @Column({ nullable: false })
    designation: string;

    @Column({ type: 'text', nullable: false}) 
    gender: GenderEnum;

    @Column({ unique: true, nullable: false })
    public email_id: string;

    @Column({ unique: true, nullable: false })
    mobile: string;

    @Column({ type: 'date', nullable: false})
    public birth_date: Date;

    @Column({ type: 'date', nullable: false})
    public date_of_joining: Date;

    @Column()
    address: string

    @Column(({ default: true}))
    is_active: boolean
}