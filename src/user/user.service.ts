import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>) {}
  
  async create(dto: CreateUserDto) {

    const user = this.userRepository.create(dto);
    
    //return 'This action adds a new user';
    return await this.userRepository.save(user)
  }

  findMany() {
    //return `This action returns all user`;
      return this.userRepository.find();
  
  }

  async update(id: number, dto: CreateUserDto) {
    //return `This action updates a #${id} user`;
    const user = await this.userRepository.findOne({ where: { id } });
    //permet de vérifier si l'enristrement existe dans la base de donnée.

    Object.assign(user, dto);

      return await this.userRepository.save(user);

   // return user;
 
  }


  async delete(id: number) {
    
    const user = await this.userRepository.findOne({ where: { id } });
    //permet de vérifier si l'enristrement existe dans la base de donnée.

      return await this.userRepository.remove(user);

 
  }


  //findOne(id: number) {
    //return `This action returns a #${id} user`;
  //}

  //remove(id: number) {
   // return `This action removes a #${id} user`;
 // }
}
