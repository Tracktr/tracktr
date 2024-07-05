import { ApiProperty } from '@nestjs/swagger';

export class Movies {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  poster: string;

  @ApiProperty({ type: Number })
  year: number;
}
