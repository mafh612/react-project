/// <reference types="node" />
import { URL } from 'url';
import React from 'react';
import { PageType } from 'gtm-datalayer-library/dist/types/enums';
import { DatalayerData } from 'gtm-datalayer-library';
interface LayoutProps {
    URL: URL;
    children: React.ReactNode;
    datalayerData: DatalayerData;
    pageType: PageType;
}
declare const _default: ({ URL, children, datalayerData, pageType }: LayoutProps) => React.ReactElement;
export default _default;
