import {
	IsString,
	IsNumber
} from 'class-validator'


export class EventDto {
	
	@IsNumber()
	lat: number

	@IsNumber()
	lng: number

	@IsString()
	time: string

	@IsString()
	description: string
	
	@IsString()
	name: string

}
