/// <reference types="node" />
import React from 'react';
import { DatalayerData, PageType } from 'gtm-datalayer-library';
import { URL } from 'url';
interface HeadProps {
    URL: URL;
    datalayerData: DatalayerData;
    pageType: PageType;
}
declare const _default: ({ URL, datalayerData, pageType }: HeadProps) => React.ReactElement;
export default _default;
