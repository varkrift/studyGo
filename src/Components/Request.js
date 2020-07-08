import React, { Component } from 'react';
import UserItems from './Content/Users/UserItems';

const BASE_PATH =  "https://api.github.com";
const USERS_PATH = "/users";

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            user: {},
            // users: [],
            login: 'egnaf',
            isLoaded: false,
            error: null,
        }
        this.fetchData = this.fetchData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.setParamInput = this.setParamInput.bind(this);
    }

    componentDidMount() {
        // const {paramDesc, paramLimit, paramOffset, paramSort} = this.state;
        this.fetchData()
    };

    fetchData = (login) => {
        fetch(`${BASE_PATH}${USERS_PATH}/${login}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState ({
                    isLoaded: true,
                    user: result,
                });
            },
            (error) => {
                this.setState ({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    setParamInput = (event) => {
        if(event.key === 'Enter') {
            const {login} = this.state;
            this.fetchData(login)
        }
    }

    handleInputChange = (event) => {
            this.setState({
            login: event.target.value,
            })
    }

    render() {
        const {user, login, isLoaded, error} = this.state;
                
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
        return (
            <div>

                <input name="inputLogin" type="text"
                onKeyPress={this.setParamInput}
                onChange={this.handleInputChange}
                value={login}
                label="login"
                placeholder="login"
                />

                <UserItems key={user.id} name={user.name} img={user.avatar_url} biography={user.bio}> </UserItems>

            </div>
        );
        }
    }
}
 
export default Request;
