import { Module } from '@nestjs/common'
import { HeroService } from './hero.service'
import { HeroController } from './hero.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HeroEntity } from './hero.entity'
import { ConfigModule } from '@nestjs/config'

@Module({
	controllers: [HeroController],
	providers: [HeroService],
	imports: [ConfigModule, TypeOrmModule.forFeature([HeroEntity])]
})
export class HeroModule {}
