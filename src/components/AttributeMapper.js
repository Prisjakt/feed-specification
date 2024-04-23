import React from 'react';
import AttributeTreeView from '@site/src/components/AttributeTreeView';
import AttributeMapperPreview from '@site/src/components/AttributeMapperPreview';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Mapper = () => {
    const [selectedAttributes, setSelectedAttributes] = React.useState([]);

    return (
        <>
            <div className="column left">
                <AttributeTreeView selectedAttributes={selectedAttributes} setSelectedAttributes={setSelectedAttributes} />
            </div>
            <div className="column right">
                <AttributeMapperPreview selectedAttributes={selectedAttributes} />
            </div>
        </>
    );
};

export default function AttributeMapper() {
    return (
        <BrowserOnly>
            {() => <Mapper />}
        </BrowserOnly>
    );
}
