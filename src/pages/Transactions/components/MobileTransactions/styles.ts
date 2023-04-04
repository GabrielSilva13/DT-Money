import styled from "styled-components"
import * as Accordion from "@radix-ui/react-accordion"

interface PriceHighlightProps {
  variant: "income" | "outcome"
}

export const MobileTransactionHeader = styled(Accordion.Header)`
  width: 100%;
  margin: 1.5rem 0;

  & > button {
    width: 100%;
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]};
    border: 0;
    border-radius: 6px;
    font-size: 0.875rem;
    text-align: left;
    color: ${(props) => props.theme["gray-100"]};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const MobileTransactionContent = styled(Accordion.Content)`
  margin: 0.5rem 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`
