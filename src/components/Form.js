import React from "react";
import '../Form.css'
class Form extends React.Component {
    state = { textField: 'otra cosaa' }
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
                    this.props.onSubmit(this.state.textField)
                }}>Crear tarea </button>
            </form>
        );
    }

}

export default Form;