
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Example from './example';
import AnotherType  from './original';

export default function DemoDrag() {
	const [dragType, setDragType] = useState(2);

	return (
		<>
			<ul>
				<li onClick={ ()=>setDragType(1) }>其他方式实现</li>
				<li onClick={ ()=>setDragType(2) }>react-dnd实现</li>
			</ul>
			{
				dragType === 1 ? <AnotherType />
				:
				<DndProvider backend={Backend}>
					<Example />
				</DndProvider>
			}
			
		</>
	)
}