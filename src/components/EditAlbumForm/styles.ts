import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SubmitButton = styled.button`
  color: white;
  border: none;
  background-color: #333;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin-top: 0.5rem;

  &:hover {
    background-color: #555;
  }
`;
