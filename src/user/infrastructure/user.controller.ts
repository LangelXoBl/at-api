import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('user')
@ApiTags('User')
export class UserController {
  constructor() {}

  @Post()
  @ApiOperation({ summary: 'Crear Usuario' })
  createUser(): string {
    return 'User created!';
  }

  @Get()
  @ApiOperation({ summary: 'Consultar Usuarios' })
  getUsers(): string {
    return 'Hello World!';
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar Usuario' })
  getUser(): string {
    return 'User';
  }
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar Usuario' })
  updateUser(): string {
    return 'User updated!';
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar Usuario' })
  deleteUser(): string {
    return 'User deleted!';
  }
}
