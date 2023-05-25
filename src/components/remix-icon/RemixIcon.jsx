
import { IconContext } from 'react-icons';
import { RiErrorWarningLine } from 'react-icons/ri';

const RemixIcon = ({
  icon: IconComponent = RiErrorWarningLine,
  size = '1em',
  color = 'currentColor',
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <IconContext.Provider value={{ size, color, className }}>
      <IconComponent style={style} {...rest} />
    </IconContext.Provider>
  );
};

export default RemixIcon;
