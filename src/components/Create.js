import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      _id: '',
      title: '',
      description: '',
      author: '',
      tags: '',
      created_at: '',
      updated_at: ''
    };

  }
  handleChange= (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {title, description, author,  tags, created_at, updated_at } = this.state;

    axios.post('/api/article', { title, description, author,  tags, created_at, updated_at })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { title, description, author,  tags, created_at, updated_at } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD ARTICLE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Article List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.handleChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="Description">Title:</label>
                <textArea class="form-control" name="description" onChange={this.handleChange} placeholder="Description"
                          cols="80" rows="3">{description}</textArea>
              </div>

              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.handleChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label for="tags">Tags:</label>
                <input type="text" className="form-control" name="tags" value={tags} onChange={this.handleChange}
                       placeholder="tags"/>
              </div>
              <div className="form-group">
                <label for="created_at">Created At:</label>
                <input data-provide="datepicker" className="form-control" name="created_at" value={created_at} onChange={this.handleChange}
                       placeholder="Created At"/>
              </div>
              <div className="form-group">
                <label for="updated_at">Updated At:</label>
                <input type="number" className="form-control" name="updated_at" value={updated_at}
                       onChange={this.handleChange} placeholder="Updated At"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
