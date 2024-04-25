/*
https://github.com/uber/baseweb/tree/main?tab=readme-ov-file
https://baseweb.design/components/tree-view/
*/

import React, {useCallback, useMemo} from "react";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Checkbox } from 'baseui/checkbox';
import {
	StatefulTreeView,
	TreeLabelInteractable,
	TreeLabel
} from "baseui/tree-view";
import attributeData from '@site/static/attribute-data.json';

const CustomTreeLabel = ({node, selectedAttributes, setSelectedAttributes, ...props}) => {
	const isAttribute = node?.isAttribute === true;

	const value = useMemo(
		() => isAttribute && selectedAttributes.find((x) => x.id === node.id) !== undefined,
		[isAttribute, selectedAttributes]
	);

	const handleChange = useCallback((e) => {
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
	}, [setSelectedAttributes]);

	if (isAttribute) {
		return (
			<TreeLabelInteractable>
				<div className={'treeview-checkbox'}>
					<Checkbox checked={value} onChange={handleChange}>
						{node.name}
					</Checkbox>
				</div>
			</TreeLabelInteractable>
		);
	}

	return (<TreeLabel {...props} node={node} label={node?.name} />);
};

/* Set parent for each child */
const setParent = (category) => {
	if (Array.isArray(category.children)) {
		category.children.forEach((child) => {
			child.parent = category;
			setParent(child);
		});
	}
	return category;
}

const DATA = attributeData.map(setParent);

export default function AttributeTreeView({setSelectedAttributes, selectedAttributes}) {
	const engine = new Styletron();

	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<StatefulTreeView
					data={DATA}
					overrides={{
						TreeLabel: {
							component: (props) => <CustomTreeLabel {...props} selectedAttributes={selectedAttributes} setSelectedAttributes={setSelectedAttributes} />,
						},
					}}
				/>
			</BaseProvider>
		</StyletronProvider>
	);
}
