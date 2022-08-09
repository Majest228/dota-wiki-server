import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [ConfigModule, TypeOrmModule.forFeature([UserEntity])]
})
export class UserModule {}
