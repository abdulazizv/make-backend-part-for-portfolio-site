import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialDto } from './create-social.dto';

export class UpdateSocialDto extends PartialType(CreateSocialDto) {
    readonly name?: string;
    readonly url?: string;
    icon?:string;
}
