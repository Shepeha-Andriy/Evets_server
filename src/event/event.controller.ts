import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { EventDto } from './event.dto'
import { EventService } from './event.service'

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get(':eventId')
	@Auth()
	async getEvent(@CurrentUser('id') id: string, @Param() params: { eventId: string }, @Query() query: { forUpdate: string }) {
		return this.eventService.getOne(id, params.eventId, query.forUpdate)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createEvent(@CurrentUser('id') id: string, @Body() dto: EventDto) {
		return this.eventService.create(id, dto)
	}
	
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get()
	async getEvents() {
		return this.eventService.getAll()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post(':eventId')
	@Auth()
	async updateEvent(@CurrentUser('id') id: string, @Param() params: { eventId: string }, @Body() dto: EventDto) {
		return this.eventService.update(id, params.eventId, dto)
	}
	
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Delete(':eventId')
	@Auth()
	async deleteEvent(@CurrentUser('id') id: string, @Param() params: { eventId: string }) {
		return this.eventService.delete(id, params.eventId)
	}
}
