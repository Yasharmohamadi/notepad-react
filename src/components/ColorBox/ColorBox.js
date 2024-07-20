import React from "react";

export default class ColorBox extends React.Component {
	constructor(props) {
		super(props);
	}

    clickOnBox (color) {
        this.props.onColor(color)
    }

	render() {
        let color = this.props.colors
		return (
			<div onClick={this.clickOnBox.bind(this, color)} className="color" style={{ background: color}}></div>
		);
	}
}
