import React from 'react';
import { observer } from 'mobx-react';

const HelloWorld = observer(({ props }) =>
	<div>
		<h1>Hello World!</h1>
	</div>
);

export default HelloWorld;