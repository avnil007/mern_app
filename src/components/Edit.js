import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  handleChange = (e) => {
    const state = this.state.article
    state[e.target.name] = e.target.value;
    this.setState({article:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author,  tags, created_at, updated_at } = this.state.article;

    axios.put('/api/article/'+this.props.match.params.id, {title, description, author,  tags, created_at, updated_at })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT article
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.article._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Article List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.article.title} onChange={this.handleChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.article.description}
                       onChange={this.handleChange} placeholder="Description"/>
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.article.author} onChange={this.handleChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label for="tags">Tags:</label>
                <input type="text" className="form-control" name="tags" value={this.state.article.tags}
                       onChange={this.handleChange} placeholder="Tags"/>
              </div>
              <div class="form-group">
                <label for="created_at">Created At:</label>
                <input type="number" class="form-control" name="created at" value={this.state.article.created_at} onChange={this.handleChange} placeholder="Created At" />
              </div>
              <div className="form-group">
                <label for="created_at">Updated At:</label>
                <input type="number" className="form-control" name="Updated at"
                       value={this.state.article.updated_at} onChange={this.handleChange} placeholder="Updated At"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
