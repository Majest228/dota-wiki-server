import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJwtConfig = async (): Promise<JwtModuleOptions> => ({
	secret: 'erdfsd$%dfd'
})
