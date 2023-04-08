import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "http://linkedin.com",
        icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com",
        icon: "https://cdn-icons-png.flaticon.com/512/25/25657.png",
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/",
        icon: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png",
        bgColor: "#b8b3e8"
      }
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {data.map((item) => {
          return <ListItem links={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default List;
