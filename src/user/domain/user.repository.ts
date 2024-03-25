import { IUser } from './user.entity';

export interface IUserRepository {
  save(user: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
}
