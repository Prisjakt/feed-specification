import React from 'react';
import AttributeTreeView from '@site/src/components/AttributeTreeView';
import AttributeMapperPreview from '@site/src/components/AttributeMapperPreview';
import attributeData from "./attribute-data.json";
import { AttributeMapperContext } from "./AttributeMapperContext";

export default function AttributeMapper() {
    const [selectedAttributes, setSelectedAttributes] = React.useState([]);

    return (<AttributeMapperContext.Provider value={{selectedAttributes, setSelectedAttributes}}>
        <div className="column left">
            <AttributeTreeView data={attributeData} />
        </div>

        <div className="column right">
            <AttributeMapperPreview />
        </div>
    </AttributeMapperContext.Provider>);
}