import React from 'react'

const Login = props => (
<div>
<form
onSubmit={e => {
e.preventDefault()
const {username, password} = e.target.elements
props.onSubmit({
username: username.value,
password: password.value,
})
}}
>
<label htmlFor="username">Username</label>
<input id="username" />
<label htmlFor="password">Password</label>
<input id="password" type="password" />
<br />
<button type="submit">Submit</button>
</form>
</div>
)

export {Login}
