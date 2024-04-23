/*
https://github.com/uber/baseweb/tree/main?tab=readme-ov-file
https://baseweb.design/components/tree-view/
*/

import * as React from "react";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Checkbox } from 'baseui/checkbox';
import {
	StatefulTreeView,
	TreeLabelInteractable,
	TreeLabel
} from "baseui/tree-view";
import { AttributeMapperContext, AttributeMapperDataContext } from "./AttributeMapperContext";

const findParentName = (data, id) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].children) {
            for (let j = 0; j < data[i].children.length; j++) {
                if (data[i].children[j].id === id) {
                    return data[i].name;
                }
                let found = findParentName(data[i].children, id);
                if (found) return found;
            }
        }
    }
    return null;
};

const CustomTreeLabel = (props) => {
	const node = props.node;
	const [value, setValue] = React.useState(false)
	const {setSelectedAttributes } = React.useContext(AttributeMapperContext);
	const isAttribute = node.id.toString().startsWith('a');

	const handleChange = (e) => {
		setValue(e.target.checked);

		const selectionNode = {
			id: node.id,
			name: node.name,
			parent: node.parent?.name
		};

		/* When selecting: Add only id, name and parent name to the selection state, not the children */
		if (e.target.checked) {
			setSelectedAttributes((prevSelected) => [...prevSelected, selectionNode]);
		} else {
			setSelectedAttributes((prevSelected) => prevSelected.filter((x) => x.id !== selectionNode.id));
		}
	};

	if (isAttribute) {
		return (<TreeLabelInteractable>
			<Checkbox checked={value} onChange={handleChange}>
				{node.name}
			</Checkbox>
		</TreeLabelInteractable>);
	} else {
		return (<TreeLabel {...props} label={node?.name} />);
	}
};

export default ({ data }) => {
	const engine = new Styletron();

	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<StatefulTreeView
					data={data}
					overrides={{
						TreeLabel: {
							component: CustomTreeLabel,
						},
					}}
				/>
			</BaseProvider>
		</StyletronProvider>
	);
}