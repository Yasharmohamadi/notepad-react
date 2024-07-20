import React from "react";

export default class ColorBox extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
        let color = this.props.colors
		return (
			<div  className="color" style={{ background: color}}></div>
		);
	}
}
