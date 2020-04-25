import styled from 'styled-components';

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .MuiFormControl-root {
    margin: 5px 0;
  }
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledForm, FieldBox };
