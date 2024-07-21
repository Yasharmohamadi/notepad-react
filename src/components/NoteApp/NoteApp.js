import React from "react";
import "./NoteApp.css";
import ColorBox from "../ColorBox/ColorBox";

export default class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [
				"#fff",
				"#FFF9C4",
				"#B3E5FC",
				"#D7CCC8",
				"#C8E6C9",
				"#CFD8DC",
				"#F8BBD0",
				"#E1BEE7",
			],
			note: [],
			noteTitle: "",
			colorBox: "#fff",
		};
	}

	changeInputBackground(color) {
		this.setState({
			colorBox: color,
		});
	}

	noteTitleHnadler(event) {
		this.setState({
			noteTitle: event.target.value,
		});
	}

	addNoteHandler() {
		let newNote = {
			id: this.state.note.length + 1,
			title: this.state.noteTitle,
			color: this.state.colorBox,
		};
		this.setState({
			note: [...this.state.note, newNote],
			noteTitle: "",
		});
	}

	render() {
		return (
			<div id="countainer">
				<div id="section_start">
					<h1 id="titr">Notepad App</h1>
					<div id="section_input">
						<input
							placeholder="Type Note here..."
							type="text"
							id="input"
							style={{ background: this.state.colorBox }}
							onChange={this.noteTitleHnadler.bind(this)}
							value={this.state.noteTitle}
						></input>
						<button
							className="input_btn"
							id="add_btn"
							onClick={this.addNoteHandler.bind(this)}
						>
							a
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="add_icon"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg> */}
						</button>
						<button className="input_btn" id="del_btn">
							d
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="del_icon"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
								/>
							</svg> */}
						</button>
					</div>
					<div id="colors">
						{this.state.colors.map((color) => (
							<ColorBox
								key={color}
								colors={color}
								onColor={this.changeInputBackground.bind(this, color)}
							/>
						))}
					</div>
					<div className="section_boxes">

						
					</div>
				</div>
			</div>
		);
	}
}
