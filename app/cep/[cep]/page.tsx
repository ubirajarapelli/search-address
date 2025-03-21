import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"

interface CepProps {
  params: {
    cep: string
  }
}

export default async function Cep({ params }: CepProps) {
  const { cep } = await params

  const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
  const data = await response.json()

  // if (response.status === 400) {
  //   return <ErrorMessage message={data.message} />
  // }

  // if (response.status === 404) {
  //   return <ErrorMessage message={data.message} />
  // }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Resultado da busca CEP {cep}</h1>
      {data?.errors?.length ? (
        <ErrorMessage message={data.message} />
      ) : (
        <>
          <p>
            <strong>CEP:</strong> {data.cep}
          </p>
          <p>
            <strong>Estado:</strong> {data.state}
          </p>
          <p>
            <strong>Cidade:</strong> {data.city}
          </p>
          <p>
            <strong>Bairro:</strong> {data.neighborhood}
          </p>
          <p>
            <strong>Rua:</strong> {data.street}
          </p>
          <p>
            <strong>Latitude:</strong> {data.location.coordinates.latitude}{" "}
            <strong>Longitude:</strong> {data.location.coordinates.longitude}
          </p>
        </>
      )}
    </div>
  )
}
