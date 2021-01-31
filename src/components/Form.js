import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          url : 'Intial Render of Url!',
          method: '',
          getMethod: '',
          getUrl: ''
        }
    }

    handleChange = (e) =>{
        let getUrl = e.target.value;
        this.setState({getUrl})
    }

    handleClick = () => {
        let url = this.state.getUrl;
        let method = this.state.getMethod;
        this.setState({url, method})
    }

    change = (e) =>{
        let getMethod = e.target.value;
        this.setState({getMethod})
    }

    render() {
        return (
            <>
                <div>
                    <p>URL: <input type="url" onChange={this.handleChange}/> <input type="submit" onClick={this.handleClick}/></p>
                </div>
                <div>
                    <input type="radio" name="crud" value="GET" onClick={this.change}/><label>GET</label>
                    <input type="radio" name="crud" value="POST" onClick={this.change}/><label>POST</label>
                    <input type="radio" name="crud" value="PUT" onClick={this.change}/><label>PUT</label>
                    <input type="radio" name="crud" value="DELETE" onClick={this.change}/><label>DELETE</label>
                </div>
                <div>
                    <p>{this.state.method} {this.state.url}</p>
                </div>
            </>
        );
    }
}

export default Form;