import React from 'react';


class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', this.state);
    this.setState({
      name:'',
      email: '',
      title: '',
      department: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="employee-form"> {EmployeeForm.css}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div> 
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={this.state.department}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    )
  }
}
export default EmployeeForm;


