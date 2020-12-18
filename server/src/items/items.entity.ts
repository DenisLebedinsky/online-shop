import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Items} from "./interfaces";

@Entity({schema: "test", name: "Items"})
export class ItemsEntity extends BaseEntity implements Items {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column("varchar")
  public title!: string;

  @Column("varchar")
  public description: string;

  @Column("boolean")
  public actual: boolean;
}
