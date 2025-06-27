'use client'

import { useState } from 'react'

export default function Home() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gerador de Senhas</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 border rounded"
            placeholder="Sua senha aparecerá aqui"
          />
          <button
            onClick={copyToClipboard}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            title="Copiar senha"
          >
            📋
          </button>
          <button
            onClick={generatePassword}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            title="Gerar nova senha"
          >
            🔄
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">
              Comprimento: {length}
            </label>
            <input
              type="range"
              min="4"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={generatePassword}
            className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Gerar Senha
          </button>

          {password && (
            <div className="mt-4 p-3 bg-gray-100 rounded">
              <p className="text-sm text-gray-600">Senha gerada:</p>
              <p className="font-mono text-lg break-all">{password}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 