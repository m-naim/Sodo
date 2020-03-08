import React, { Component } from 'react';
import { connect } from "react-redux";
import { addList } from "../../../actions/listActions";

class AddBox extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }
    handleChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleKeyPress = e => {
        if (e.key === "Enter") this.addList();
    };

    addList = () => {
        const newItem = {
            name: this.state.name,
            token: window.localStorage.jwt,
            tasks: []
        };
        this.setState({ input: false });
        this.props.addList(newItem);
    }
    render() {
        return (
            <div className="list-group-item">

                <input
                    type="text"
                    autoFocus
                    placeholder="Enter le titre de la liste"
                    value={this.state.name}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChangeName}
                />
                <div>
                    <button
                        title="Annuler"
                        className="btn-ico fas fa-times"
                        onClick={() => { }}
                    />
                    <button
                        title="Valider"
                        className="btn-ico fas fa-angle-right"
                        onClick={() => this.addList()}
                    />
                </div>

            </div>
        );
    }
}

export default connect(null, { addList })(AddBox);
