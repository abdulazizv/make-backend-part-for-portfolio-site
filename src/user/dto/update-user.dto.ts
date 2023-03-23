import { PartialType } from '@nestjs/mapped-types';
import { IsString,IsDate } from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/decorators';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    readonly email: string;
    @IsOptional()
    @IsString()
    readonly password: string;
    @IsOptional()
    @IsString()
    readonly full_name: string;
    @IsOptional()
    @IsString()
    readonly phone_number: string;
    @IsOptional()
    @IsString()
    readonly cv_link: string;
    @IsOptional()
    @IsDate()
    readonly birth_date: Date;
    @IsOptional()
    @IsString()
    readonly address: string;
    photo: string;
}
