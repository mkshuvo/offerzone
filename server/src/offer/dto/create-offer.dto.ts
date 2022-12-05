import { IsString, IsNumber, IsDate } from 'class-validator';
export class CreateOfferDto {
  // 1
  @IsString()
  offerTitle: string;

  // 1
  @IsString()
  description: string;

  // 1
  @IsNumber()
  price: number;

  // 1
  @IsNumber()
  discount: number;

  // 1
  @IsString()
  contactNumber: string;

  // 1
  @IsString()
  location: string;

  // 1
  @IsString()
  offerImageName: string;

  // 1
  @IsDate()
  CreatedAt: Date;

  // 1
  @IsDate()
  ExpiredAt: Date;

  @IsDate()
  UpdatedAt: Date;

  @IsString()
  FbLink: string;

  @IsString()
  InstagramLink: string;

  @IsString()
  TwitterLink: string;

  @IsString()
  WebsiteLink: string;

  @IsString()
  Comment: string;

  @IsString()
  CategoryId: string;

  @IsString()
  UserId: string;

  @IsString()
  OfferTypeId: string;

  @IsNumber()
  Ratings: number;
}
