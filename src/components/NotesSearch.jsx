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
      <>
        <label htmlFor="title">Cari NOTE</label>
        <input
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.onSearchChangeHandler}
        />
      </>
    );
  }
}
