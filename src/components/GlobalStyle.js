import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        @import url('https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Jost:wght@300;400&display=swap');
    }
      html{
        @media (max-width: 1500px) {
            font-size: 85%;
        }
    }

    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        font-family: 'Jost', sans-serif;
        ${'' /* font-family: 'Akaya Kanadaka', cursive; */}
  }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Jost', sans-serif;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        border-radius:4px;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover {
        background: #23d997;
        color: #121212;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3{
        color:white;
    }
    p{
        padding: 3rem 0rem;
        color: #cccccc;
        font-size: 1.3rem;
        line-height: 150%;
    }
    h4{
        font-size: 1.9rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1.1.rem;
    }
`;
export default GlobalStyle;
