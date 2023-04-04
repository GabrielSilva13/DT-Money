import { useContextSelector } from "use-context-selector"
import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { searchFormSchema } from "../../../../schemas/searchFormSchema"
import { SearchFormContainer } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { TransactionsContext } from "../../../../contexts/TransactionsContext"

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const setQuery = useContextSelector(TransactionsContext, (context) => {
    return context.setQuery
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    setQuery(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  )
}
