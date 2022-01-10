import { BasicFetchResult } from '/@/api/model/baseModel';

export interface ModelAll {
  id?: number;
  columnName?: string;
  fieldId?: number;
  fieldName?: string;
  businessObjectId?: number;
  businessObjectName?: string;
  tableId?: number;
  tableCode?: string;
  columnType?: string;
  columnDefaultValue?: string;
  columnPoint?: number;
  columnNull?: Boolean;
  columnPrimary?: Boolean;
  columnDescription?: string;
  belongsTableId?: number;
  columnUnique?: Boolean;
}

export type ModelAllResultVO = BasicFetchResult<ModelAll>;

export interface FieldItem {
  id?: number;
  fieldCode?: string;
  fieldName?: string;
  fieldRepositoryId?: number;
  updatedTime?: Date;
  createdTime?: Date;
}
export type FieldVOPageResult = BasicFetchResult<FieldItem>;

export interface RepositoryItem {
  id?: number;
  repositoryName?: string;
  repositoryType: string;
  updatedTime?: Date;
  createdTime?: Date;
}
export type RepositoryVOPageResult = BasicFetchResult<RepositoryItem>;

export interface BusinessObjectItem {
  id?: number;
  businessObjectCode?: string;
  businessObjectName?: string;
  businessObjectDescription?: string;
  businessObjectFieldId?: number;
  businessObjectUserId?: number;
  updatedTime?: Date;
}

export type BusinessObjectListResultVO = BasicFetchResult<BusinessObjectItem>;

export interface TableItem {
  id?: number;
  organizationId?: string;
  tableCode?: string;
  tableField?: string;
  tableUserId?: number;
  tableVersion?: number;
  tableUserName?: string;
  tableDescription?: string;
  tableBusinessObjectId?: number;
  updatedTime?: Date;
  createdTime?: Date;
}

export type TableListResultVO = BasicFetchResult<TableItem>;

export interface TableColumnItem {
  id?: number;
  columnName?: string;
  columnType?: string;
  columnDefaultValue?: string;
  columnNull?: Boolean;
  columnPrimary?: Boolean;
  columnDescription?: string;
  belongsTableId?: number;
  columnUnique?: Boolean;
  columnUserId?: number;
  columnContributors?: string;
  columnStatus?: number;
}

export type ModelColumnListResultVO = BasicFetchResult<TableColumnItem>;

export interface ModelColumnGetList {
  username?: string;
  tableCode?: string;
  belongsTableId?: number;
  id?: number;
}