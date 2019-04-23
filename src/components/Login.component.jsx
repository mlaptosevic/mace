import * as React from 'react';

class Login extends React.Component {
    render () {
        return (
            <div>
                <label>Username</label>
                <input type='text' />
                <label>Password</label>
                <input type='text' />
                <button>KLIK MI</button>
            </div>
        );
    }
}

export default Login;