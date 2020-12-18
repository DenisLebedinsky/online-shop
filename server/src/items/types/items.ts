import { Field, Int, ObjectType} from "@nestjs/graphql";
import {Items} from "../interfaces";

@ObjectType()
export class ItemsType implements Items {
    @Field(_type => Int)
    public id: number;

    @Field()
    public title: string;

    @Field()
    public description: string;

    @Field()
    public actual: boolean
}