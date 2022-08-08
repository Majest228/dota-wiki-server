import { Base } from 'src/utils/base.entity'
import { Column, Entity } from 'typeorm'

@Entity('User')
export class UserEntity extends Base {
	@Column({ unique: true })
	email: string

	@Column({ select: false })
	password: string

	@Column({ unique: true })
	login: ''

	@Column({ default: '' })
	name: ''

	@Column({ default: '' })
	surname: ''

	@Column({ default: false, name: 'is_verified' })
	isVerified: boolean

	@Column({ default: '', name: 'avatar_path' })
	avatarPath: string
}
