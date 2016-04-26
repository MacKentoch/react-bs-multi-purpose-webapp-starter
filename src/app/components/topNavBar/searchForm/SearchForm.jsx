'use strict';

import React, { Component }   from 'react';

class SearchForm extends Component {

  handleKeyPress(target) {
    if (target.charCode === 13) {
      const searchInput = this.refs.searchInput.findDOMNode();
      this.props.submitSearch(searchInput.value);
    }
  }

  handleOnClick(event) {
    event.preventDefault();
    console.log('this.refs.searchInput.style', this.myTextInput);
     this.myTextInput.style.width = '300px';
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
