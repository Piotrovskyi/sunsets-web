import React from 'react';
import './Icon.styles.css';

const files = require.context(
  '!svg-sprite-loader!svgo-loader!./icons',
  false,
  /.*\.svg$/
);

const iconsInlineStyles = {};

files.keys().forEach((filePath) => {
  const fileData = files(filePath).default;
  const id = fileData.id;
  const [, , width, height] = fileData.viewBox.split(' ');
  iconsInlineStyles[id] = {
    height: `${height / width}em`,
  };
});

const Icon = ({ iconName, children, ...props }) => (
  <svg
    {...props}
    style={{ display: 'inline-block' }}
    width="1em"
    height={
      iconsInlineStyles[iconName] ? iconsInlineStyles[iconName].height : '1em'
    }
    role={props.role}
    aria-hidden={!props.role}
  >
    <use xlinkHref={`#${iconName || children}`} />
  </svg>
);

export default Icon;
