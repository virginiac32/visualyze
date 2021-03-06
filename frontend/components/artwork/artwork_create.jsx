import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class ArtworkCreate extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.state.session.currentUser;
    this.state = {
        title:"",
        description:"",
        artist:"",
        user_id: currentUser.id,
        year:"",
        link:"",
        thumbnail:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.upload = this.upload.bind(this);
    this.showThumbnail = this.showThumbnail.bind(this);
    this.uploadButton = this.uploadButton.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearErrors();
    }
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createArtwork({artwork: this.state})
      .then(data => {
        this.props.clearErrors();
        this.props.history.push(`/artworks/${data.artwork.id}`);
      });
  }

  goBack() {
    window.history.back();
  }

  upload(e) {
    e.preventDefault();
    const that = this;
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results) {
      if (!error) {
        that.setState({link:results[0].secure_url});
        that.setState({thumbnail:results[0].thumbnail_url});
      }
    });
  }

  showThumbnail() {
    if (this.state.thumbnail) {
      return (
        <img className="artwork-thumbnail" src={this.state.thumbnail} alt={this.state.title} />
      );
    }
  }

  uploadButton() {
    if (!this.state.thumbnail) {
      return <button onClick={this.upload}>Upload Artwork</button>;
    } else {
      return <button onClick={this.upload}>Change Artwork</button>;
    }
  }

  render() {
    return (
      <div className="artwork-create">
        <li className="exit-icon">
          <i className="fa fa-times fa-lg" aria-hidden="true" onClick={this.goBack}></i>
        </li>
        <form className="artwork-form" onSubmit={this.handleSubmit}>

          {this.renderErrors()}
          <h1>Add New Artwork</h1>
          <ul className="artwork-form-list">
            <li>
              <label>Title:
                <input className="input" value={this.state.title} onChange={this.update('title')} placeholder="Title of the artwork" />
              </label>
            </li>
            <li>
              <label>Artist:
                <input className="input" value={this.state.body} onChange={this.update('artist')} placeholder="The artist's full name" />
              </label>
            </li>
            <li>
              <label>Date:
                <input className="input" value={this.state.body} onChange={this.update('year')} placeholder="e.g. 1992" />
              </label>
            </li>
            <li>
              <label>Description:
                <textarea rows="6" cols="50" value={this.state.body} onChange={this.update('description')} placeholder="The artwork depicts..."/>
              </label>
            </li>
            </ul>
            <li id="uploaded-artwork">
            Uploaded Artwork:
            </li>
            <li>
            {this.showThumbnail()}
            </li>

            {this.uploadButton()}
            <button className="create-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ArtworkCreate);
