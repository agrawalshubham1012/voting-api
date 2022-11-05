import { Entity, Column, PrimaryGeneratedColumn, Index, Unique, OneToMany } from 'typeorm'

@Entity()
@Index( ['userId'] )
@Unique( 'userId', ['userId'] ) 
export class Vote {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @Column()
  vote: number

}