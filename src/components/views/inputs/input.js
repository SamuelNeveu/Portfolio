import React from "react";
// import { TransitionMotion, spring } from "react-motion";
import "./style.css";

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            name: props.name || "",
            type: props.type || "",
            label: props.label || "Label",
        };
    }

    changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" });
        this.props.onChange(value);
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            this.setState({ value: this.props.predicted });
        }
    }

    render() {
        const { active, value, error, label, name, type } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;

        return (
            <div className={fieldClassName}>
                {active &&
                    value &&
                    predicted &&
                    predicted.includes(value) && <p className="predicted">{predicted}</p>}
                <input
                    id={1}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={label}
                    onChange={this.changeValue.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label htmlFor={1} className={error && "error"}>
                    {error || label}
                </label>
            </div>
        );
    }
}
