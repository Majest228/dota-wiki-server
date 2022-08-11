import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getHeroStats } from 'src/utils/utils'
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
		const hero = await this.heroRepository.findOne(getHeroStats(id))

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
		return this.heroRepository.find(getHeroStats())
	}

	async createHero() {
		const defaultValue = {
			name: '',
			heroAvatarPath: '',
			mainAttribute: '',
			phrase: '',
			description: '',
			typeAttack: '',
			difficult: 0,
			videoPath: '',
			hp: 0,
			mana: 0,
			force: 0,
			agility: 0,
			intellect: 0,
			damage: '',
			timeAttack: 0,
			attackRange: 0,
			projectileSpeed: 0,
			armor: 0,
			magicResist: 0,
			move: 0,
			turnRate: 0,
			vision: ''
		}
		const newHero = await this.heroRepository.create(defaultValue)
		const hero = await this.heroRepository.save(newHero)
		return hero.id
	}

	async deleteHero(id: number) {
		return this.heroRepository.delete({ id })
	}
}
