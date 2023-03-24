import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkDto } from './create-work.dto';

export class UpdateWorkDto extends PartialType(CreateWorkDto) {
    readonly company_name?: string;
    readonly from?: Date;
    readonly to?: Date;
    readonly position?: string;
}
