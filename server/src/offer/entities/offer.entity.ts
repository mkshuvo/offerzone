import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  //   AfterInsert,
  //   AfterUpdate,
  //   AfterRemove,
} from 'typeorm';
import { IsString } from 'class-validator';
@Entity()
export class offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  offerTitle: string;

  @Column()
  description: string;

  @Column()
  discount: number;

  @Column()
  contactNumber: number;

  @Column()
  location: number;

  @Column()
  offerImageName: number;

  //   @AfterInsert()
  //   logInsert() {
  //     console.log(`Inserted user ${this.id} and ${this.email}`);
  //   }

  //   @AfterUpdate()
  //   logUpdate() {
  //     console.log(`Updated ${this.id}`);
  //   }

  //   @AfterRemove()
  //   logRemove() {
  //     console.log(`Removed ${this.id}`);
  //   }
}
