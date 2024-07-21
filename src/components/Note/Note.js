import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

    clickOnBoxHandler (id) {
        this.props.onDelete(id)
    }

	render() {
		return (
			<div className="box" style={{background: this.props.note.color}} onClick={this.clickOnBoxHandler.bind(this, this.props.note.id)}>
				<p className="box_text">{this.props.note.title}</p>
			</div>
		);
	}
}
