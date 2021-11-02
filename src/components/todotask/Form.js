import React from "react";
import '../../Form.css'
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

//class Form extends React.Component{
function Form(props) {
    //Un hook extiende las funcionalidades de un componente. Permite hacer cosas nuevas
    // state = { textField: '' }

    //HOOK DE USESTATE
    //variable y funcion modificadora       //valor inicial de state
    const [textField, setTextField] = React.useState('');
    return (
        <form>
            <TextField id="outlined-basic" label="Agregar tarea" variant="filled"
            
                type="text"
                value={
                    // this.state.textField
                    textField
                }
                onChange={
                    (e) => {

                        // this.setState({ textField: e.target.value });
                        setTextField(e.target.value);
                    }
                }
                className="input"
                placeholder="Agrega tarea"
                style={{marginTop:"30px"}} />
            <Button variant="contained"
                color="success"
                className="button" onClick={(e) => {

                    e.preventDefault();
                    if (
                        // this.state.textField
                        textField
                        ) {
                        // this.props.onSubmit(this.state.textField)
                        props.onSubmit(textField);


                        // this.setState({ textField: "" })
                        setTextField("");
                    }
                }}>Crear tarea </Button>
        </form>
    );


}

export default Form;