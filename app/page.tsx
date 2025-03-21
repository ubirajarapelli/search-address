"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [cep, setCep] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setCep(value)
  }

  const handleSearch = () => {
    if (cep) {
      router.push(`/cep/${cep}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Buscar Endereço</h1>
      <form>
        <label htmlFor="cep" className="sr-only">
          Digite seu cep
        </label>
        <input
          type="text"
          value={cep}
          onChange={handleChange}
          className="p-2 text-foreground rounded-md mb-2"
          placeholder="Digite o CEP"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}
