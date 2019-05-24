import {Controller, Get} from '@nestjs/common';
import { FieldService } from './field.service';

@Controller('fields')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Get()
  async get(): Promise<any> {
    return this.fieldService.get();
  }
}
