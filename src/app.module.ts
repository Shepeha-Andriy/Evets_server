import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { EventModule } from './event/event.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		EventModule,
	]
})
export class AppModule {}
