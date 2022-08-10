import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { HeroDto } from './hero.dto'
import { HeroEntity } from './hero.entity'

@Injectable()
export class HeroService {
	constructor(
		@InjectRepository(HeroEntity)
		private readonly heroRepository: Repository<HeroEntity>
	) {}

	async byId(id: number) {
		const hero = await this.heroRepository.findOne({
			where: { id },
			relations: {
				skills: {}
			},
			select: {
				skills: {
					id: true,
					name: true,
					active: true,
					cooldown: true,
					damageOrHeal: true,
					damageYourself: true,
					description: true,
					iconPath: true,
					manapool: true,
					not_magic: true,
					quote: true,
					skill: true,
					typeDamage: true,
					videoPath: true
				}
			}
		})

		if (!hero) throw new NotFoundException('Герой  не найден')

		return hero
	}

	async updateHero(id: number, dto: HeroDto) {
		const hero = await this.byId(id)

		return this.heroRepository.save({
			...hero,
			...dto
		})
	}

	async getAll() {
		return this.heroRepository.find()
	}
}
