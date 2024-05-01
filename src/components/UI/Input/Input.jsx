import { StyledInput } from '../Input/Input.styled';

const Input = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
  border,
  onBlur,
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      name={name}
      border={border}
      onBlur={onBlur}
    />
  );
};

export default Input;
