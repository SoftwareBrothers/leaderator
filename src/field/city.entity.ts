import {Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';

@Entity()
@Unique(['name'])
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
