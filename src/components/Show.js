import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    axios.get('/api/article/'+this.props.match.params.id)
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
              {this.state.article.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> article List</Link></h4>
            <dl>
              <dt>Title:</dt>
              <dd>{this.state.article.title}</dd>
              <dt>Description:</dt>
              <dd>{this.state.article.description}</dd>
              <dt>Author:</dt>
              <dd>{this.state.article.author}</dd>
              <dt>Tags:</dt>
              <dd>{this.state.article.tags}</dd>
              <dt>Created At:</dt>
              <dd>{this.state.article.created_at}</dd>
              <dt>Updated At:</dt>
              <dd>{this.state.article.updated_at}</dd>
            </dl>
            <Link to={`/`} class="btn btn-info">Articles</Link>&nbsp;
            <Link to={`/edit/${this.state.article._id}`} class="btn btn-warning">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.article._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
