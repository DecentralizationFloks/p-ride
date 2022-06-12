import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

import { RegisterUserDto } from '../auth/DTO/registerUser';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(
    searchField: Record<string, string>,
  ): Promise<UserDocument | null> {
    return this.userModel.findOne(searchField).exec();
  }

  async createUser(
    user: RegisterUserDto,
  ): Promise<User & Document & { _id: any }> {
    return this.userModel.create(user);
  }
}