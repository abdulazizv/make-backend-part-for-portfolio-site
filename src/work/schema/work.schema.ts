import {Prop,SchemaFactory,Schema} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkDocument = HydratedDocument<Work>;

@Schema()

export class Work {
    @Prop()
    company_name:string;

    @Prop({type:Date})
    from:Date;

    @Prop({type:Date})
    to:Date;

    @Prop()
    position:string;

}

export const WorkSchema = SchemaFactory.createForClass(Work);