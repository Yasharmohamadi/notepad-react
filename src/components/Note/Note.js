import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="box">
				<p className="box_text">{this.props.title}</p>
			</div>
		);
	}
}
