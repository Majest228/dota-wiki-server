import { IsNumber, IsString } from 'class-validator'

export class SkillDto {
	@IsString()
	name: string
	@IsString()
	description: string
	@IsString()
	iconPath: string
	@IsString()
	videoPath: string
	@IsString()
	skill: string
	@IsString()
	active: string
	@IsNumber()
	typeDamage: number
	@IsString()
	not_magic: string
	@IsNumber()
	damageYourself: number
	@IsString()
	damageOrHeal: string
	@IsNumber()
	cooldown: number
	@IsNumber()
	manapool: number
	@IsString()
	quote: string

	@IsNumber()
	heroId: number
}
