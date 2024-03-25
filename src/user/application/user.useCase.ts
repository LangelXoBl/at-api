import { Injectable } from '@nestjs/common';
import { IUser } from '../domain/user.entity';
import { IUserRepository } from '../domain/user.repository';

@Injectable()
export class UserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async getUserById(id: string): Promise<IUser> {
    return await this.userRepository.findById(id);
  }
}
