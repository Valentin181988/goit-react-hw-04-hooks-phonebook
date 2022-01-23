import { useState } from "react";
/* import PropTypes from 'prop-types'; */
import { nanoid } from 'nanoid';

import { Form, Label, Input, SubmitButton } from "./PhoneBookForm.styled";

export function PhoneBookForm({onSubmit}) {

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {

    const {name, value} = event.target
    
    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default: return;
    };
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(name)
    console.log(number)

    onSubmit({name, number})
    
    setName('');
    setNumber('');
};


  return (
    <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}/>

        <Label htmlFor={numberInputId}>Number</Label>
        <Input
            type="number"
            name="number"
            id={numberInputId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}/>
        <SubmitButton
            type="submit"
            /* disabled={!this.state.number || !this.state.name} */>Add contact
        </SubmitButton>
  </Form>
);
};

/* export class PhoneBookForm extends Component {

    state = {
        name: '',
        number: ''
      };

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleInputChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({name: '', number: ''})
    };

    render() {
        const {name, number} = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor={this.nameInputId}>Name</Label>
                <Input
                    type="text"
                    name="name"
                    id={this.nameInputId}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleInputChange}/>

                <Label htmlFor={this.numberInputId}>Number</Label>
                <Input
                    type="number"
                    name="number"
                    id={this.numberInputId}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInputChange}/>
                <SubmitButton
                    type="submit"
                    disabled={!this.state.number || !this.state.name}>Add contact
                </SubmitButton>
          </Form>
        );
    };

};

PhoneBookForm.propTypes = {
    onSubmit: PropTypes.func
 }; */


