import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

interface LoadingProps {
  className?: string
  isLoading: boolean
  children: React.ReactNode
  count?: number
  height: number
  width: number
}

export const Loading = ({
  className,
  isLoading,
  children,
  height,
  width,
  count,
}: LoadingProps) => {
  if (isLoading)
    return (
      <Skeleton
        className={className}
        height={height}
        width={width}
        baseColor={"#3a3a41"}
        highlightColor={"#202024"}
        direction="ltr"
        count={count}
      />
    )

  return <>{children}</>
}
