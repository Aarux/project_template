import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-MainOne: #eab9d9;
  --color-MainTwo: #dac9d9;
  --color-MainThree: #cad9d9;
  --color-MainFour: #bae9d9;
  --color-MainFive: #aaf9d9;

  --color-SecondOne: #110a60;
  --color-SecondTwo: #310a60;
  --color-SecondThree: #510a60;
  --color-SecondFour: #710a60;
  --color-SecondFive: #910a60;

  --color-Guld: #e4b72a;

  --color-Blalila: #7289da;
  --color-Helvit: #FFFFFF;
  --color-Gralila: #99AAB5;
  --color-Gra: #6B6D70;
  --color-Morkgra: #2C2F33;
  --color-Svart: #23272A;
  --color-Morksvart: #121C24;
  --color-Text: #808080;
  --border-Svart: 2px solid #23272A;
  --border-Blalila: 2px solid #7289da;
  --border-Guld: 2px solid #e4b72a;
}

html{
  margin:0;
  padding:0;
  }
form {
  background: #121c24;
  padding: 1em;
  color: var(--color-Helvit);
  font-weight:300;
  box-sizing:border-box;
  p{
    color:red;
  }
}

input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

input[type="text"],
input[type="password"]{
  background: var(--color-Helvit);
  border: var(--border-Svart);
  color: var(--color-Text);
  border-radius: 4px;
}

input[type="text"]:focus,
input[type="password"]:focus{
  border: var(--border-Guld);
}

button {
  background: var(--color-Morkgra);
  color:var(--color-Text);
  border-radius: 3px;
  margin:1em 0;
}

button[type="submit"] {
  width: 100%;
  color: var(--color-Helvit);
  padding: 0.7em;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  background: var(--color-Guld);
  transition: 0.3s;
  animation: fadein 0.3s;
  text-shadow: 0.03125em 0.03125em 0.09355em #152029;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.5em;
  position: relative;
  box-shadow: 0.0625em 0.0625em 0.09375em #152029;
  cursor: pointer;
}

button[type="submit"]:hover {
  filter:brightness(110%);
}

button[type="submit"]:focus {
  filter:brightness(110%);
}
button[type="submit"]:disabled {
  background: red;
}

a{
  color: var(--color-Guld);
  text-shadow: 0.03125em 0.03125em 0.09355em #152029;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  animation: fadein 0.3s;
  :hover {
    filter:brightness(133%);
  }
}
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  background: var(--color-Morksvart);
  border-bottom: var(--border-Svart);
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  height: 60px;
  display: flex;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 0.19375em;
  box-shadow: 0.0625em 0.0625em 0.09375em #152029;
  margin: auto 5px;
  background: var(--color-Guld);
  text-align: center;
  transition: 0.3s;
  :first-child {
    margin-left: 20px;
  }
  :hover {
    filter: brightness(110%);
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    color: var(--color-Helvit);
    text-shadow: 0.03125em 0.03125em 0.09355em #152029;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Body = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  width: 100%;
  background: var(--color-Morkgra);
`;

const Landing = styled.div`
  width: 100%;
  justify-content: center;
  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 20px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const Home = styled.div`
  width: 100%;
  justify-content: center;
  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 20px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const Gallery = styled.div`
  width: 100%;
  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 15px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  img {
    width: calc(30% - 2px);
    margin: 1.66%;
    box-shadow: #192530 2px 2px 5px;
  }
`;

const News = styled.div`
  width: 100%;
  justify-content: center;

  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 20px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const Events = styled.div`
  width: 100%;
  justify-content: center;

  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 20px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const AboutUs = styled.div`
  width: 100%;
  justify-content: center;
  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 20px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const JoinUs = styled.div`
  width: 100%;
  justify-content: center;
  p {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    background: var(--color-Svart);
    border: var(--border-Svart);
    border-radius: 5px;
    color: var(--color-Guld);
    margin: 0 auto;
    margin-top: 10%;
    width: 50%;
    padding: 20px;
    height: fit-content;
    justify-content: space-around;
    display: flex;
  }
`;

const SignIn = styled.div`
  width: 50%;
  margin: auto;
  border: var(--border-Svart);
  background: var(--color-Morksvart);
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 5px;
  h1 {
    text-align: center;
    color: var(--color-Guld);
  }
  p {
    color: red;
  }
`;

const SignUp = styled.div`
  width: 50%;
  margin: auto;
  color: var(--color-Guld);
  text-shadow: 0.03125em 0.03125em 0.09355em #152029;
  border: var(--border-Svart);
  background: #121c24;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  h1 {
    text-align: center;
  }
`;

const SignOutBtn = styled.a`
  display: block;
  width: 100%;
  color: var(--color-Helvit);
  padding: 0.7em;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  background: var(--color-Guld);
  transition: 0.3s;
  animation: fadein 0.3s;
  text-shadow: 0.03125em 0.03125em 0.09355em #152029;
  font-weight: 600;
  position: relative;
  box-shadow: 0.0625em 0.0625em 0.09375em #152029;
  cursor: pointer;
  :hover {
    filter: brightness(110%);
  }

  :focus {
    filter: brightness(110%);
  }
`;

const PasswordForget = styled.div`
  width: 50%;
  margin: auto;
  color: var(--color-Guld);
  text-shadow: 0.03125em 0.03125em 0.09355em #152029;
  border: var(--border-Svart);
  background: #121c24;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  text-align: center;
`;

const Admin = styled.div`
  width: 50%;
  margin: auto;
  border: var(--border-Morksvart);
  background: var(--color-Svart);
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 10px;
  color: var(--color-Helvit);
  h1 {
    padding: 10px;
    color: var(--color-Guld);
  }
  p {
    padding: 10px;
  }
  strong {
    color: var(--color-Guld);
  }
`;

const Account = styled.div`
  width: 50%;
  margin: auto;
  border: var(--border-Morksvart);
  background: var(--color-Svart);
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 10px;
  color: var(--color-Helvit);
  h1 {
    padding: 5px;
    color: var(--color-Helvit);
    text-align: center;
  }
  h2 {
    padding: 5px;
    color: var(--color-Helvit);
  }
  #change {
    text-align: center;
    color: var(--color-Guld);
  }
  strong {
    color: var(--color-Guld);
  }
  form {
    border-radius: 5px;
  }
`;

export {
  GlobalStyle,
  Header,
  Nav,
  NavBtn,
  Body,
  Landing,
  Home,
  Gallery,
  GalleryImage,
  News,
  Events,
  AboutUs,
  JoinUs,
  SignIn,
  SignUp,
  SignOutBtn,
  PasswordForget,
  Admin,
  Account
};
