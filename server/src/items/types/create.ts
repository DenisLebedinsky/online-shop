import {Field, InputType} from "@nestjs/graphql";
import {ItemsCreateFields} from "../interfaces";

@InputType()
export class ItemCreateInputType implements ItemsCreateFields {
  @Field()
  public title: string;

  @Field()
  public description: string;

  @Field()
  public actual: boolean;
}
