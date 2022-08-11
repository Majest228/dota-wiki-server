import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SkillDto } from './skill.dto'
import { SkillEntity } from './skill.entity'

@Injectable()
export class SkillService {
	constructor(
		@InjectRepository(SkillEntity)
		private readonly skillRepository: Repository<SkillEntity>
	) {}

	async createSkill(dto: SkillDto) {
		const newSkill = this.skillRepository.create({
			name: dto.name,
			description: dto.description,
			iconPath: dto.iconPath,
			videoPath: dto.videoPath,
			skill: dto.skill,
			active: dto.active,
			typeDamage: dto.typeDamage,
			not_magic: dto.not_magic,
			damageYourself: dto.damageYourself,
			damageOrHeal: dto.damageOrHeal,
			cooldown: dto.cooldown,
			manapool: dto.manapool,
			quote: dto.quote,
			hero: { id: dto.heroId }
		})
		return this.skillRepository.save(newSkill)
	}
}
