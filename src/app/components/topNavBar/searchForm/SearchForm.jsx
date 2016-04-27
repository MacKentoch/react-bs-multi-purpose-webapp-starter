'use strict';

import React, { Component }   from 'react';

class SearchForm extends Component {

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.props.submitSearch(this.myTextInput.value);
    }
  }

  handleOnClick(event) {
    event.preventDefault();
    this.myTextInput.classList.add('searchInputLarger');
  }

  render() {
    const props     = this.props;
    const formClass = `navbar-form ${props.position}`;

    return (
      <form className={formClass}>
        <input
          ref={(ref) => this.myTextInput = ref}
          type="text"
          className="form-control searchInputLarge"
          autoFocus={props.autofocus}
          placeholder={props.placeHolder}
          onKeyPress={(target) => this.handleKeyPress(target)}
          onClick={(ev) => this.handleOnClick(ev)}
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
