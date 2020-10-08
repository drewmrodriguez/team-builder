import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(member);
        const newMember = {
            ...member,
            id: member.name
        };
        props.addNewMember(newMember);
    }

return(
    <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="name">Name: </label>
        <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={member.name}
            onChange={event => changeHandler(event)}
        /><br />

        <label htmlFor="email">Email: </label>
        <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={member.email}
            onChange={event => changeHandler(event)}
        /><br />

        <label htmlFor="role">Role: </label>
        <input
            type="text"
            name="role"
            placeholder="Job Role"
            value={member.role}
            onChange={event => changeHandler(event)}
        /><br />

        <button>Submit</button>           
    </form>
);
}

export default Form;