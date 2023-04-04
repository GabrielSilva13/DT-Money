import { useContextSelector } from "use-context-selector"
import { motion } from "framer-motion"
import { TransactionProps } from "../../@types/transactions"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { dateFormatter, priceFormatter } from "../../Utils/dateFormatter"

import { Loading } from "../../components/Loading"
import { SearchForm } from "./components/SearchForm"
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles"
import { MobileTransactions } from "./components/MobileTransactions"

export const Transactions = () => {
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
    <>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        {window.outerWidth <= 900 ? (
          <MobileTransactions />
        ) : (
          <TransactionTable>
            <Loading
              className="loading"
              isLoading={isLoading}
              width={1072}
              height={59}
              count={6}
            >
              <tbody>
                {data?.map((transaction: TransactionProps, index) => (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, y: 30 * index }}
                    animate={{
                      opacity: 1,
                      transition: { type: "spring", delay: 0.2 * index },
                      y: 0,
                    }}
                  >
                    <td width={"50%"}>{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === "outcome" && "- "}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </Loading>
          </TransactionTable>
        )}
      </TransactionContainer>
    </>
  )
}
