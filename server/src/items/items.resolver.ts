import {ItemsService} from "./items.service";
import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ItemsType} from "./types/items";
import {Items, ItemsCreateFields} from "./interfaces";
import {Public} from "../common/decorators";
import {log} from "util";
import {ItemCreateInputType} from "./types/create";
import {ItemsEntity} from "./items.entity";

@Resolver()
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Public()
  @Query(_returns => ItemsType)
  async items(params: any) {
    console.log("items", params);
    return this.itemsService.findAll();
  }

  @Public()
  @Mutation(_returns => ItemsType)
  async createItems(@Args("data") data: ItemCreateInputType): Promise<ItemsEntity | undefined> {
    console.log("DATA", data);
    return this.itemsService.create(data);
  }
}
