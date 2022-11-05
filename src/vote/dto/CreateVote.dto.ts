import { IsNotEmpty } from 'class-validator'

export class CreateVoteDto {

  @IsNotEmpty()
  userId: number

  @IsNotEmpty()
  vote: number
  
}