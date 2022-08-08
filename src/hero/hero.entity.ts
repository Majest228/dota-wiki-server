import { SkillEntity } from 'src/skill/skill.entity'
import { Base } from 'src/utils/base.entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity('Hero')
export class HeroEntity extends Base {
	@Column({ unique: true })
	name: string

	@Column({ default: '', name: 'hero_avatar_path' })
	heroAvatarPath: string

	@Column({
		default: '',
		name: 'main_attribute'
	})
	mainAttribute: string

	@Column({ default: '' })
	phrase: string

	@Column({ default: '' })
	description: string

	@Column({ name: 'type_attack' })
	typeAttack: string

	@Column()
	difficult: number

	@Column({ default: '', name: 'video_path' })
	videoPath: string

	@Column({ default: 0 })
	hp: number

	@Column({ default: 0 })
	mana: number

	@Column({ default: 0 })
	force: number

	@Column({ default: 0 })
	agility: number

	@Column({ default: 0 })
	intellect: number

	@Column({ default: '' })
	damage: string

	@Column({ default: 0, name: 'attack_time' })
	timeAttack: number

	@Column({ default: 0, name: 'attack_range' })
	attackRange: number

	@Column({
		default: 0,
		name: 'projectile_speed'
	})
	projectileSpeed: number

	@Column({ default: 0 })
	armor: number

	@Column({ default: 0, name: 'magic_resist' })
	magicResist: number

	@Column({
		default: 0
	})
	move: number

	@Column({
		default: 0,
		name: 'turn_rate'
	})
	turnRate: number

	@Column({ default: '' })
	vision: string

	@OneToMany(() => SkillEntity, skill => skill.hero)
	skills: SkillEntity[]
}
