import { PartialType } from '@nestjs/mapped-types';
import { IsString,IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    readonly email:string;
    @IsOptional()
    @IsString()
    readonly password:string;
    @IsOptional()
    @IsString()
    readonly full_name:string;
    @IsOptional()
    @IsString()
    readonly phone_number:string;
    @IsOptional()
    @IsString()
    readonly cv_link:string;
    @IsOptional()
    @IsString()
    readonly birth_date: Date;
    @IsOptional()
    @IsString()
    readonly address: string;
    photo:string;
}
