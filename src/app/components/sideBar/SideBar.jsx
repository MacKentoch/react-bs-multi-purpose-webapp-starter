import React      from 'react';
import { Link }   from 'react-router';

const SideBar = (props) => {
  return (
    <div className="col-sm-3 col-md-2 sidebar">
      {
        props.sideBarMenus.map(
          (group, groupIndex) => {
            return (
              <ul
                key={'group-' + groupIndex}
                className="nav nav-sidebar">
                {
                  group.map(
                    (menu, menuIndex) => {
                      return (
                        <li>
                          <Link
                            key={'sidemenu-' + menuIndex}
                            to={menu.link}
                            className={menu.isDefaultActive ? 'active' : ''}
                            onButtonClick={menu.onButtonClick ? menu.onButtonClick : null}>
                            {menu.label}
                            {
                              menu.isDefaultActive &&
                              <span className="sr-only">(current)</span>
                            }
                          </Link>
                        </li>
                    );
                    }
                  )
                }
              </ul>
            );
          }
        )
      }
    </div>
  );
};

SideBar.propTypes = {
  sideBarMenus: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label:            React.PropTypes.string.isRequired,
        link:             React.PropTypes.string,
        isDefaultActive:  React.PropTypes.bool.isRequired,
        onButtonClick:    React.PropTypes.func
      })
    ).isRequired
  ).isRequired
};

export default SideBar;
