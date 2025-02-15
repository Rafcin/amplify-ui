import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconPausePresentation = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 3H3C1.9 3 1 3.85 1 4.95V18.95C1 20.05 1.9 21 3 21H21C22.1 21 23 20.05 23 18.95V4.95C23 3.85 22.1 3 21 3ZM21 19H3V5H21V19ZM9 8H11V16H9V8ZM13 8H15V16H13V8Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
