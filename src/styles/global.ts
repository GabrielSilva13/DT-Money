import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
      transition: box-shadow 250ms;
    }

    body{
      background-color: ${(props) => props.theme["gray-800"]};
      color: ${(props) => props.theme["gray-100"]};
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font: 400 1rem Roboto, sans-serif;
    }

    @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.DialogOverlay[data-state='open'],
.DialogContent[data-state='open'] {
  animation: fadeIn 300ms ease-out;
}

.DialogOverlay[data-state='closed'],
.DialogContent[data-state='closed'] {
  animation: fadeOut 300ms ease-in;
}

.AccordionChevron {
  transition: transform 300ms;
}
.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(180deg);
}


`
