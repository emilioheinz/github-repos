import styled, { css } from 'styled-components'

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    color: #fff;
  }
`

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 2px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  ${props =>
    props.searchError
      ? css`
          transition-property: border;
          transition-duration: 0.3s;
          border: 2px solid #ff6060;
          color: #ff6060;
        `
      : css`
          border: 2px solid #eee;
        `}
`
