import * as Accordion from "@radix-ui/react-accordion"
import { CaretDown } from "phosphor-react"
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../../../../contexts/TransactionsContext"
import { priceFormatter, dateFormatter } from "../../../../Utils/dateFormatter"
import {
  MobileTransactionContent,
  MobileTransactionHeader,
  PriceHighlight,
} from "./styles"

export const MobileTransactions = () => {
  const { data, isLoading } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        data: context.data,
        isLoading: context.isLoading,
      }
    }
  )

  return (
    <Accordion.Root type="multiple">
      {data?.map((transaction) => (
        <Accordion.Item value={transaction.id.toString()} key={transaction.id}>
          <MobileTransactionHeader>
            <Accordion.Trigger className="AccordionTrigger">
              <PriceHighlight variant={transaction.type}>
                {transaction.type === "outcome" && "- "}{" "}
                {priceFormatter.format(transaction.price)}
              </PriceHighlight>

              <strong>{transaction.category}</strong>
              <CaretDown className="AccordionChevron" size={15} />
            </Accordion.Trigger>
          </MobileTransactionHeader>
          <MobileTransactionContent>
            <div>
              <strong>{transaction.description}</strong>
              <strong>
                {dateFormatter.format(new Date(transaction.createdAt))}
              </strong>
            </div>
          </MobileTransactionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
