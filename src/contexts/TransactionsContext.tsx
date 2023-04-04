import { ReactNode, useCallback, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { TransactionProps } from "../@types/transactions"
import { api } from "../services/api"
import { createContext } from "use-context-selector"

interface TransactionsContextSchema {
  data: TransactionProps[]
  isLoading: boolean
  setQuery: (query: string) => void
  createNewTransaction: any
}

interface CreateTransactionProps {
  description: string
  price: number
  category: string
  type: "income" | "outcome"
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext(
  {} as TransactionsContextSchema
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [query, setQuery] = useState("")
  const queryClient = useQueryClient()

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<TransactionProps[]>(`transactions`, {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    })
    return data
  }, [])

  const { data, isLoading, error }: any = useQuery({
    queryKey: ["transactions", query],
    queryFn: () => fetchTransactions(query),
  })

  const createTransaction = useCallback(
    async (data: CreateTransactionProps) => {
      const { category, description, price, type } = data

      await api.post("transactions", {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      })
    },
    []
  )

  const createNewTransaction = useMutation({
    mutationFn: createTransaction,
    onSuccess: (data) => {
      queryClient.setQueryData(["transactions", data], data)
      queryClient.invalidateQueries(["transactions"])
    },
  })

  if (error) return "An error has occurred: " + error.message

  return (
    <TransactionsContext.Provider
      value={{
        data,
        isLoading,
        setQuery,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
