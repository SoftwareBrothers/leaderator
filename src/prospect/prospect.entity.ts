import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prospect {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  vip: boolean;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  secondName: string;

  @Column()
  lastName: string;

  @Column()
  company: string;

  @Column()
  domain: string;

  @Column()
  email: string;

  @Column('int')
  gender: number;

  @Column()
  title: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  address: string;

  @Column()
  foundOn: string;

  @Column({ nullable: true, type: 'text' })
  note: string;
}
