import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="box" style={{background: this.props.note.color}}>
				<p className="box_text">{this.props.note.title}</p>
			</div>
		);
	}
}
