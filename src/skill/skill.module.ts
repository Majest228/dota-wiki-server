import { Module } from '@nestjs/common'
import { SkillService } from './skill.service'
import { SkillController } from './skill.controller'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SkillEntity } from './skill.entity'

@Module({
	controllers: [SkillController],
	providers: [SkillService],
	imports: [ConfigModule, TypeOrmModule.forFeature([SkillEntity])]
})
export class SkillModule {}
