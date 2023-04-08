import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    const { id, name, link, icon, bgColor } = this.props.links;

    return (
      <div className="ListItem">
        <a href={link} style={{ background: bgColor }}>
          <img src={icon} alt="icon-social" />
          {name}
        </a>
      </div>
    );
  }
}

export default ListItem;
