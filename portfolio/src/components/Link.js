import React, { useState } from "react";
import PropTypes from "prop-types";
import { IonIcon } from "@ionic/react";

const Link = ({ url, icon, iconSize, iconColor, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconStyle = { color: isHovered ? hoverColor : iconColor };

  return (
    <div className="mt-3 relative">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        style={{ overflow: "" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <IonIcon name={icon} size={iconSize} style={iconStyle} />
      </a>
    </div>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
  iconColor: PropTypes.string, // Add iconColor prop
  hoverColor: PropTypes.string, // Add hoverColor prop
};

Link.defaultProps = {
  iconSize: "medium",
  iconColor: "#9b6c9a", // Set the custom color if not provided
  hoverColor: "#b37eb5", // Set the hover color if not provided
};

export default Link;
