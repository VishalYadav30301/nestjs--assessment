import { Type } from 'class-transformer';
import {
  ArrayUnique,
  IsEnum,
  IsString,
  ValidateNested,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { Action } from '../enums/action.enum';
import { Resource } from '../enums/resource.enum';

export class CreateRoleDto {
  @IsString()
  name: string;


  @IsBoolean()
  @IsOptional()
  isSuperAdmin: boolean = false; // Default to false for regular roles

  @IsString()
  @IsOptional()
  parentRoleId?: string; // For sub-admin hierarchy (reference to parent admin role)

  @ValidateNested()
  @Type(() => Permission)
  permissions: Permission[];


}

export class Permission {
  @IsEnum(Resource)
  resource: Resource;

  @IsEnum(Action, { each: true })
  @ArrayUnique()
  actions: Action[];
}
