import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class AnnotationCreateForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
        body:"",
        opacity:0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({opacity:100});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentUser = this.props.user.id;
    const currentArtwork = this.props.match.params.artworkId;
    this.props.createAnnotation({annotation: {
      body:this.state.body,
      total_score:0,
      user_id: currentUser,
      artwork_id: currentArtwork,
      x_pos:this.props.position[0],
      y_pos:this.props.position[1]
    }});
  }

  render() {
    return (
      <div className="annotation-create-update">
        <form className="annotation-form" onSubmit={this.handleSubmit}>
          <h1>Annotate</h1>
          <ul className="annotation-form-list">
            <li>
              <input className="input" value={this.state.body} onChange={this.update('body')} placeholder="This aspect of the artwork represents..." />
            </li>
            <li>
              <button className="submit-button">Submit</button>
            </li>
          </ul>
        </form>
        <button onClick={this.goBack}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(AnnotationCreateForm);
