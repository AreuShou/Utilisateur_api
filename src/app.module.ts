import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { join } from 'path';
import { NotificationModule } from './notification/notification.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
     
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'arlette',
        database: 'management_db',
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    UserModule,

    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}