import styled from '@emotion/styled';

const StyledInput = styled.input`
  border: 1px solid #333;
  padding: 0.3rem;
  border-radius: 6px;
  outline-color: #333;
`;

type InputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value?: string | undefined;
  onChange?: (e: any) => void;
};

function Input({
  id,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name || id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
