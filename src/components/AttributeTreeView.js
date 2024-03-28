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

const engine = new Styletron();

const CustomTreeLabel = (props) => {
	const [value, setValue] = React.useState(false)
	const node = props.node;
	const isAttribute = node.id.toString().startsWith('a');

	if (isAttribute) {		
		return (<TreeLabelInteractable>
			<Checkbox checked={value} onChange={e => setValue(e.target.checked)}>
				{node.name}
			</Checkbox>
		</TreeLabelInteractable>);
	} else {
		return (<TreeLabel {...props} label={node?.name}/>);
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