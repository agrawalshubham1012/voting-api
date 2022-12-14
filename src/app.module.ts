import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'

import { User } from './user/entities/user.entity'
import { Vote } from './vote/entities/vote.entity'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { VoteModule } from './vote/vote.module'
import { RefreshSession } from './auth/entities/refreshSession.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite3',
      synchronize: false,
      logging: false,
      entities: [User,Vote, RefreshSession],
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    AuthModule,
    VoteModule
  ],
  controllers: [AppController]
})
export class AppModule {}
