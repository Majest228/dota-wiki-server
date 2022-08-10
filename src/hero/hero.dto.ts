import { IsNumber, IsString } from 'class-validator'

export class HeroDto {
	@IsString()
	name: string

	@IsString()
	heroAvatarPath: string

	@IsString()
	mainAttribute: string

	@IsString()
	phrase: string

	@IsString()
	description: string

	@IsString()
	typeAttack: string

	@IsNumber()
	difficult: number

	@IsString()
	videoPath: string

	@IsNumber()
	hp: number

	@IsNumber()
	mana: number

	@IsNumber()
	force: number

	@IsNumber()
	agility: number

	@IsNumber()
	intellect: number

	@IsString()
	damage: string

	@IsNumber()
	timeAttack: number

	@IsNumber()
	attackRange: number

	@IsNumber()
	projectileSpeed: number

	@IsNumber()
	armor: number

	@IsNumber()
	magicResist: number

	@IsNumber()
	move: number

	@IsNumber()
	turnRate: number

	@IsString()
	vision: string
}
