import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ItemsEntity} from "./items.entity";
import {ItemsResolver} from "./items.resolver";
import {ItemsService} from "./items.service";

@Module({
  imports: [TypeOrmModule.forFeature([ItemsEntity])],
  providers: [ItemsResolver, ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
