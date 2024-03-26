import styled from "styled-components";

export const FormRegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3rem;
  }
  label {

    color: #FFF;
  }

  input {
    height: 40px;
    border-radius: 6px;
    border: none;
    padding: 10px;
  }



  button {
    height: 40px;
    margin-top: 1rem;
    border-radius: 6px;
    border: none;
  }
  button:hover {
    background: #ffa500;
    color: #fff;
  }

  div {
    width: 400px;
    border: 1px solid #ffa500;
    padding: 15px;
    border-radius: 6px;
  }
`;

export const ImgContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
  }
`;
