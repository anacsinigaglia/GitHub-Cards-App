import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = { userName: '' }; 
//é uma referência pra chamar o input (nesse caso, é uma string vazia),
//usando isso no value do input, conseguimos controlar o valor desse input e tornar o react ciente do que se passa nele

    handleSubmit = async (event) => {
        event.preventDefault(); //só pra não dar refresh na página quando dermos submit
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' }); //esvazia o input
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                       placeholder="GitHub username"
                       value={this.state.userName} //controlamos o valor do input, mas isso impede que a gente digite nele, portanto, faremos o seguinte:
                       onChange={event => this.setState( { userName: event.target.value } )} //permite que digitemos no input novamente
                       required 
                />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;