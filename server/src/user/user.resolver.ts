import {Query, Resolver} from "@nestjs/graphql";
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";
import {User, Roles} from "../common/decorators";
import {UserListType, UserType} from "./types";
import {UserRole} from "./interfaces";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => UserType)
  public profile(@User() user: UserEntity): UserEntity {
    return user;
  }

  @Roles(UserRole.Admin)
  @Query(_returns => UserListType)
  public listUsers(): Promise<UserListType> {
    return this.userService.findAndCount().then(([list, count]) => ({list, count}));
  }
}
