import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
    @Prop({unique:true})
    email:string;
    
    @Prop()
    password:string;

    @Prop()
    full_name:string;

    @Prop()
    phone_number:string;

    @Prop()
    photo:string;

    @Prop()
    cv_link:string;

    @Prop({type:Date})
    birth_date:Date;

    @Prop()
    address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
