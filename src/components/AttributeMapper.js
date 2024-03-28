import React from 'react';
import AttributeTreeView from '@site/src/components/AttributeTreeView';
import AttributeMapperPreview from '@site/src/components/AttributeMapperPreview';
import attributeData from "./attribute-data.json";
import { AttributeMapperContext, AttributeMapperDataContext } from "./AttributeMapperContext";

export default function AttributeMapper() {
    const [selectedAttributes, setSelectedAttributes] = React.useState([]);
    const [data, setData] = React.useState(attributeData);

    return (<AttributeMapperDataContext.Provider value={{ data, setData }}>
        <AttributeMapperContext.Provider value={{ selectedAttributes, setSelectedAttributes }}>
            <div className="column left">
                <AttributeTreeView data={data} />
            </div>

            <div className="column right">
                <AttributeMapperPreview />
            </div>
        </AttributeMapperContext.Provider>
    </AttributeMapperDataContext.Provider>);
}