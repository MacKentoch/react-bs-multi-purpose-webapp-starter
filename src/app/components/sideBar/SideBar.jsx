import React, { PropTypes } from 'react';
import { Link }   from 'react-router';

const SideBar = (props) => {
  return (
    <div className={props.classes}>
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
  sideBarMenus: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label:           PropTypes.string.isRequired,
        link:            PropTypes.string,
        isDefaultActive: PropTypes.bool.isRequired,
        onButtonClick:   PropTypes.func
      })
    ).isRequired
  ).isRequired,
  classes: PropTypes.string.isRequired
};

export default SideBar;
