import React, {Component} from 'react'

export default class Request extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded:false,
            items: [],
        }
    }

    componentDidMount() {
        fetch("http://post-reckue.apps.us-east-1.starter.openshift-online.com/tags?desc=true&limit=10&offset=0&sort=id")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState ({
                    isLoaded: true,
                    items: result,
                });
            },
            (error) => {
                this.setState ({
                    isLoaded: true,
                    error
                });
            }

        )
    };
    
    
    
    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.id}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}