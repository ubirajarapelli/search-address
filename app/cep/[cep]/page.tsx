interface CepProps {
  params: {
    cep: string
  }
}

export default function Cep({ params: { cep } }: CepProps) {
  // Simulando os dados retornados do endpoint
  const data = {
    cep: cep,
    state: "SC",
    city: "Blumenau",
    neighborhood: "Centro",
    street: "Rua Doutor Luiz de Freitas Melro",
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Dados do CEP {cep}</h1>
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
    </div>
  )
}
