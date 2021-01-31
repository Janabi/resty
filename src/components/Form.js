import React from 'react';
import '../scss/form.scss';

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
        document.querySelector('input[type=url]').value = '';
        document.getElementById('get').checked = false;
        document.getElementById('post').checked = false;
        document.getElementById('put').checked = false;
        document.getElementById('delete').checked = false;
        this.setState({url, method})
    }

    change = (e) =>{
        let getMethod = e.target.value;
        this.setState({getMethod})
    }

    render() {
        return (
            <>
                <main>
                    <div className="url-form">
                        <p>URL: <input type="url" onChange={this.handleChange}/> <input type="submit" value="Go" onClick={this.handleClick}/></p>
                    </div>
                    <div className="radiobutton">
                        <input type="radio" name="crud" id="get" value="GET" onClick={this.change}/><label>GET</label>
                        <input type="radio" name="crud" id="post" value="POST" onClick={this.change}/><label>POST</label>
                        <input type="radio" name="crud" id="put" value="PUT" onClick={this.change}/><label>PUT</label>
                        <input type="radio" name="crud" id="delete" value="DELETE" onClick={this.change}/><label>DELETE</label>
                    </div>
                    <div className="result-container">
                        <p>{this.state.method} {this.state.url}</p>
                    </div>
                </main>
            </>
        );
    }
}

export default Form;