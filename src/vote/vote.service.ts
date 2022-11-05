import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateVoteDto } from './dto/CreateVote.dto'

import { Vote } from './entities/vote.entity'

@Injectable()
export class VoteService {

  constructor(
    @InjectRepository(Vote) 
    private voteRepository: Repository<Vote>
  ) {}

  async getAllVotes(): Promise<Vote[]> {
    const allVotes =  await this.voteRepository.find({ select: ['id', 'userId','vote'] })
    let allVotesData:any;
    if(allVotes && allVotes.length > 0){
      allVotesData = {
        data:allVotes,
        votes:allVotes.length,
        message:'Votes Found'
      }
      return allVotesData
    }
    else{
      allVotesData = {
        data:[],
        votes:0,
        message:'No Votes Found'
      }
      return allVotesData
    }
  }


  async createVote(CreateVoteDto: CreateVoteDto) {
    let vote: Vote = await this.voteRepository.findOne({ where: { userId:CreateVoteDto.userId } })

    if(vote){
      const voteData = {
        message:'User already exists'
      }
      return voteData
    }
    else{
      let newVote = new Vote()

      newVote.userId = CreateVoteDto.userId
      newVote.vote = CreateVoteDto.vote
  
      return await this.voteRepository.save(newVote)
    }
    
  }

}