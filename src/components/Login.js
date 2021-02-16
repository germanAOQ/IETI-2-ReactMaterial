import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {email: '', password: '', isLoggedIn: this.props.isloggedin};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRegisterUser = this.handleRegisterUser.bind(this);
	}

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" onChange={this.handleEmailChange} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    id="password"
									onChange={this.handlePasswordChange}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
								onClick = {this.handleRegisterUser}
								
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
	
	handleEmailChange(e){
		this.setState({
			email: e.target.value
		});
	}
	
	handlePasswordChange(e){
		this.setState({
			password: e.target.value
		});
	}

	
	
	handleRegisterUser = () => {
		const registrado = localStorage.getItem(this.state.email) === this.state.password;
		console.log(localStorage.getItem(this.state.email));
		if(registrado!=true){
			this.setState({isLoggedIn: true});
			localStorage.setItem(this.state.email, this.state.password);
			//localStorage.setItem(this.state.email, this.state.isLoggedIn);
			alert("El usuario ha sido registrado");
		}else{
			alert("Usuario ya se encuentra registrado");
		}
		
	}

}