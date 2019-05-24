import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Title {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
