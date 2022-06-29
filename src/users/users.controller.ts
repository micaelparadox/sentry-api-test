import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dtos/return-user.dto';
import { CreateAdminUserRequestDto } from './dtos/create-admin-user-request.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createAdminUser(
    @Body() user: CreateAdminUserRequestDto,
  ): Promise<ReturnUserDto> {
    const newUser = await this.usersService.createAdminUser(user);
    return {
      user: newUser,
      message: 'Administrador cadastrado com sucesso',
    };
  }
}