import React from 'react';
import 'isomorphic-unfetch';
export default class extends React.Component {
    static async getInitialProps({ req, query }) {
        const res = await fetch('http://localhost:3000/graphql?', {
            method: 'POST',
            body: JSON.stringify({
                query: '{\n  apps {\n    name\n  }\n}\n',
                variables: null,
                operationName: null,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        const json = await res.json();

        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent, query, list: json.data.apps };
    }

    state = {
        list: this.props.list,
    };

    getMore = async () => {
        const res = await fetch('http://localhost:3000/graphql?', {
            method: 'POST',
            body: JSON.stringify({
                query:
                    '{\n  apps {\n    name\n    thumb\n    description\n  } \n}\n',
                variables: null,
                operationName: null,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        const json = await res.json();
        console.log('json res', json);
        this.setState({
            list: json.data.apps,
        });
    }

    render() {
        console.log('this', this.state);

        return (
            <div>
                Hello World {this.props.query && this.props.query.name}
                <div>fetch</div>
                {JSON.stringify(this.state.list)}
                <div onClick={this.getMore}>get more</div>
            </div>
        );
    }
}
