interface ErrorMessageProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="mt-10 rounded-md bg-red-100 p-4 border border-red-400">
      <p className="text-red-500 text-center">{message}</p>
    </div>
  )
}
