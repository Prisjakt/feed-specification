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
import { AttributeMapperContext } from "./AttributeMapperContext";
const engine = new Styletron();

const CustomTreeLabel = (props) => {
	const node = props.node;
	const [value, setValue] = React.useState(false)
	const {setSelectedAttributes } = React.useContext(AttributeMapperContext);
	const isAttribute = node.id.toString().startsWith('a');

	const handleChange = (e) => {
		setValue(e.target.checked);

		/* TODO: Add only id, name and parent name */
		if (e.target.checked) {
			setSelectedAttributes((prevSelected) => [...prevSelected, node]);
		} else {
			setSelectedAttributes((prevSelected) => prevSelected.filter((x) => x.id !== node.id));
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