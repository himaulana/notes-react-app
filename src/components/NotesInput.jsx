import React from 'react';

export default class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      limitTitle: 50,
    };
  }

  onTitleChangeHandler = (e) => {
    const inputTitle = e.target.value;

    if (inputTitle.length <= 50) {
      this.setState({
        title: inputTitle,
        limitTitle: 50 - inputTitle.length,
      });
    }
  };

  onBodyChangeHandler = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      body: '',
      limitTitle: 50,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <p>{this.state.limitTitle}</p>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
