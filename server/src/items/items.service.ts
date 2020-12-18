import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ItemsEntity} from "./items.entity";
import {ItemsCreateFields} from "./interfaces";

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsEntity)
    private readonly itemsEntityRepository: Repository<ItemsEntity>,
  ) {}

  public findAll(): Promise<ItemsEntity[] | undefined> {
    return this.itemsEntityRepository.find();
  }

  public async create(item: any): Promise<ItemsEntity | undefined> {
      console.log('item' , item)
      const result = await this.itemsEntityRepository
      .create({
        title: item.title,
        description: item.description,
        actual: item.actual,
      })
      .save();

    console.log("res", result);

    return result;
  }
}
