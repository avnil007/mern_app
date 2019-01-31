import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    axios.get('/api/article')
      .then(res => {
        this.setState({ article: res.data });
        console.log(this.state.article);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/article/'+id)
        .then((result) => {
          this.props.history.push("/")
        });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Article CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Article</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.article.map(article =>
                  <tr>
                    <td>{article.title}</td>
                    <td>{article.description}</td>
                    <td>{article.author}</td>
                    <td><Link to={`/show/${article._id}`} class="btn btn-info">View</Link></td>
                    <td><Link to={`/edit/${article._id}`} class="btn btn-warning">Edit</Link></td>
                    <td>
                      <button onClick={this.delete.bind(this)}
                              className="btn btn-danger">Delete
                      </button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
