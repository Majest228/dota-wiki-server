import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

export const getTypeOrmConfig = async (): Promise<TypeOrmModuleOptions> => ({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	database: 'dota-wiki',
	username: 'majest228',
	password: 'root',
	autoLoadEntities: true,
	synchronize: true
})
