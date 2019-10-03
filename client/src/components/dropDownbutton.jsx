import React, { Component } from 'react';




class dropDownbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    show = () => {
        document.addEventListener("click", this.hide);
        this.setState({ active: true });
    };

    hide = () => {
        document.removeEventListener("click", this.hide);
        this.setState({ active: false });
    };

    render() {
        const { Component, id } = this.props;
        const { active } = this.state;
        return (
            <div>
                <button className="btn-ico fas fa-ellipsis-v " type="button"
                    onClick={() => this.show()}
                    title="Menu"
                />
                {(active) ? <Component id={id} active /> : <Component id={id} />}
            </div>
        );
    }
}

export default dropDownbutton;
