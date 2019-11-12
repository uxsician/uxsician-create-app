import { createGlobalStyle } from 'styled-components';

import { Mixins, Sizes } from './vars';

const Global = createGlobalStyle`
  * { ${Mixins().bbox} }
  html, body { -webkit-font-smoothing: antialiased; }

  body {
    a, button, button:focus {
      cursor: pointer;
      outline: 0;
    }
    p, h1, h2, h3, h4, h5 {
      margin-bottom: 0;
      line-height: normal;
    }
    span {
      line-height: normal;
    }
    .container, ul {
      padding: 0;
    }
    .container {
      @media (min-width: ${Sizes.wide}) {
        max-width: 1240px;
      }
    }
    ul {
      list-style-type: none;
      margin-bottom: 0;
    }
    .link-wrapper {
      a.link {
        display: table;
        float: right;
      }
    }
    a.link {
      cursor: pointer;
      p {
        font-size: 10px;    
        line-height: 22px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
  }
`;

export default Global;
