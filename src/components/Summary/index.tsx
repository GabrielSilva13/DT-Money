import { useContextSelector } from "use-context-selector"

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useSummary } from "../../hooks/useSummary"
import { Loading } from "../../components/Loading"
import { priceFormatter } from "../../Utils/dateFormatter"
import { SummaryCard, SummaryContainer } from "./styles"

export const Summary = () => {
  const isLoading = useContextSelector(TransactionsContext, (context) => {
    return context.isLoading
  })
  const summary = useSummary()

  return (
    <SummaryContainer>
      <Loading isLoading={isLoading} height={154} width={336}>
        <SummaryCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { type: "spring", delay: 0.1 } }}
        >
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>

          <strong>{priceFormatter.format(summary?.income)}</strong>
        </SummaryCard>
      </Loading>

      <Loading isLoading={isLoading} height={154} width={336}>
        <SummaryCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { type: "spring", delay: 0.2 } }}
        >
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>

          <strong>{priceFormatter.format(summary?.outcome)}</strong>
        </SummaryCard>
      </Loading>

      <Loading isLoading={isLoading} height={154} width={336}>
        <SummaryCard
          variant="green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { type: "spring", delay: 0.3 } }}
        >
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>

          <strong>{priceFormatter.format(summary?.total)}</strong>
        </SummaryCard>
      </Loading>
    </SummaryContainer>
  )
}
