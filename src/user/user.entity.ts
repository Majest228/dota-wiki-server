import { Base } from 'src/utils/base.entity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('User')
export class UserEntity {
	@PrimaryGeneratedColumn('increment')
	id: number
	@Column({ unique: true })
	email: string

	@Column({ select: false })
	password: string

	@Column({ default: '' })
	login: string

	@Column({ default: '' })
	name: string

	@Column({ default: '' })
	surname: string

	@Column({ default: false, name: 'is_verified' })
	isVerified: boolean

	@Column({ default: '', name: 'avatar_path' })
	avatarPath: string
}
