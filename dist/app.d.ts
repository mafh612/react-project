import { DatalayerData } from 'gtm-datalayer-library';
import { PageType } from 'gtm-datalayer-library/dist/types/enums';
import { Request } from 'koa';
export declare const render: (request: Request, pageType: PageType, datalayerData: DatalayerData) => NodeJS.ReadableStream;
