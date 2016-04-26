'use strict';

import React, { Component }   from 'react';

class SearchForm extends Component {

  handleKeyPress(target) {
    if (target.charCode === 13) {
      const searchInput = this.refs.searchInput;
      this.props.submitSearch(searchInput.value);
    }
  }

  render() {
    const props     = this.props;
    const formClass = `navbar-form ${props.position}`;

    return (
      <form className={formClass}>
        <input
          refs="searchInput"
          type="text"
          className="form-control searchInputLarge"
          autoFocus={props.autofocus}
          placeholder={props.placeHolder}
          onKeyPress={(target) => this.handleKeyPress(target)}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  position:     React.PropTypes.oneOf(['navbar-left', 'navbar-right']),
  placeHolder:  React.PropTypes.string,
  autofocus:    React.PropTypes.bool,
  submitSearch: React.PropTypes.func.isRequired
};

SearchForm.defaultProps = {
  position:     'navbar-right',
  placeHolder: 'search...',
  autofocus:    false
};

export default SearchForm;
