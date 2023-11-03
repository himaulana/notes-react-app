import React from 'react';

export default class NotesSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onSearchChangeHandler = (e) => {
    const query = e.target.value;
    this.setState({ query }, () => {
      this.onPerformSearch();
    });
  };

  onPerformSearch = (e) => {
    this.props.searchNote(this.state.query);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          value={this.state.query}
          placeholder="Search your note..."
          onChange={this.onSearchChangeHandler}
        />
      </div>
    );
  }
}
