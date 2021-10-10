import React from "react";
import '../Form.css'
class Form extends React.Component {
    state = { textField: '' }
    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.textField}
                    onChange={
                        (e) => {
                            this.setState({ textField: e.target.value });
                        }
                    }
                    className="input"
                    placeholder="Agrega tarea" />
                <button className="button" onClick={(e) => {
                    e.preventDefault();
                    if (this.state.textField) {
                        this.props.onSubmit(this.state.textField)
                        this.setState({textField: ""})
                    }
                }}>Crear tarea </button>
            </form>
        );
    }

}

export default Form;