import React from 'react';
import '../scss/form.scss';
import superagent from 'superagent';
import History from './History'

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          url : 'Intial Render of Url!',
          method: '',
          text: '',
          getMethod: '',
          getUrl: '',
          getText: '', 
          item: []
        }

        if(!localStorage.getItem('queries')) {
            localStorage.setItem('queries', JSON.stringify([]))
        }
    }

    handleChange = (e) =>{
        let getUrl = e.target.value;
        this.setState({getUrl})
    }

    handleClick = async (e) => {
        e.preventDefault();
        let url = this.state.getUrl;
        let method = this.state.getMethod;
        
        
        if (method === 'GET') {
            let raw = await superagent.get(url);
            let data = raw.body;
            console.log("rawww", raw)
            console.log('Headersss==>',raw.headers)
            this.storeLocally(method, url, JSON.stringify({"body": 1}))
            this.props.handler(raw.headers ,data)
        } else {
            try {
                let text = JSON.parse(this.state.getText)
                let raw = await superagent(method.toLowerCase(), url).send(text);
                let data = raw.body;
                this.storeLocally(method, url, text);
                this.props.handler(raw.headers ,data);
            } catch (err) { console.log(err) }
        }
        // console.log("Data>>>", data)
        let item = JSON.parse(localStorage.getItem('queries'));
        document.querySelector('input[type=url]').value = '';
        document.getElementById('get').checked = false;
        document.getElementById('post').checked = false;
        document.getElementById('put').checked = false;
        document.getElementById('delete').checked = false;
        this.setState({item})  
    }

    storeLocally = async(method, url, body) =>{
        let savedQuery = await JSON.parse(localStorage.getItem('queries'));
        
        let checked = savedQuery.some(obj => {
            console.log(obj)
            if(obj.method === method && obj.url === url && obj.body === body) {
                return true;
            }else{
                return false;
            } 
        })
        if(!checked) {
            savedQuery.push({
                method: method,
                url: url,
                body: body
            })
            localStorage.setItem('queries', JSON.stringify(savedQuery));
        }
    }

    change = (e) =>{
        let getMethod = e.target.value;
        this.setState({getMethod})
    }

    textChange = (e) =>{
        let getText = e.target.value;
        this.setState({getText})
    }

    render() {
        
        return (
            <>
                <main>
                    <div className="url-form">
                        <p>URL: <input type="url" onChange={this.handleChange}/> <input type="submit" value="Go" onClick={this.handleClick}/></p>
                        <textarea onChange={this.textChange}></textarea>
                    </div>
                    <div className="radiobutton">
                        <input type="radio" name="crud" id="get" value="GET" onClick={this.change}/><label>GET</label>
                        <input type="radio" name="crud" id="post" value="POST" onClick={this.change}/><label>POST</label>
                        <input type="radio" name="crud" id="put" value="PUT" onClick={this.change}/><label>PUT</label>
                        <input type="radio" name="crud" id="delete" value="DELETE" onClick={this.change}/><label>DELETE</label>
                    </div>
                    <History queries={this.state.item}/>
                </main>
            </>
        );
    }
}

export default Form;