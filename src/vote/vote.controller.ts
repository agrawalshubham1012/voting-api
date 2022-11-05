import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'

import { CreateVoteDto } from './dto/CreateVote.dto'
import { Vote } from './entities/vote.entity'
import { VoteService } from './vote.service'

@Controller('votes')
export class VoteController {
    
  constructor(
    private voteService: VoteService
  ) {}
  
  @Get('/')
  async getAllVotes(): Promise<Vote[]> {
    return await this.voteService.getAllVotes()
  }

  @Post('/create')
  async createVote(@Body() CreateVoteDto: CreateVoteDto) {
    return await this.voteService.createVote(CreateVoteDto)
  }

}