import { Component } from 'react';

class Person extends Component {
  // Define appropriate lifecycle method to show alert here

  render() {
    const { img, email } = this.props.person;
    const { remove, index } = this.props;
    return (
      <div className="person">
        <b onClick={() => remove(index, email)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
