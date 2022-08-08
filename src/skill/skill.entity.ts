import { HeroEntity } from 'src/hero/hero.entity'
import { Base } from 'src/utils/base.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity('Skill')
export class SkillEntity extends Base {
	@Column({ default: '' })
	name: string

	@Column({ default: '' })
	description: string

	@Column({ default: '', name: 'icon_path' })
	iconPath: string

	@Column({ default: '', name: 'video_path' })
	videoPath: string

	@Column({ default: '' })
	skill: string

	@Column({ default: '' })
	active: string

	@Column({ default: 0, name: 'type_damage' })
	typeDamage: number

	@Column({ default: '', name: 'not_magic' })
	not_magic: string

	@Column({ default: 0, name: 'damage_yourself' })
	damageYourself: number

	@Column({ default: '', name: 'damage_or_heal' })
	damageOrHeal: string

	@Column({ default: 0 })
	cooldown: number

	@Column({ default: 0 })
	manapool: number

	@Column({ default: '' })
	quote: string

	@ManyToOne(() => HeroEntity, hero => hero.skills)
	@JoinColumn({ name: 'hero_id' })
	hero: HeroEntity
}
