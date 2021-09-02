import React from 'react'

const Link = ({name,href}) => {
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link" href={href}>
            {name}
          </a>
        </li>
      </div>
    );
}

export default Link
