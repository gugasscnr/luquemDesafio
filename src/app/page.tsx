'use client'

import { useState } from 'react'

export default function Home() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
    setCopied(false)
  }

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col">
      <header className="bg-blue-700 text-white py-4 shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-center tracking-tight">Gerador de Senhas</h1>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mt-8">
          <div className="flex items-center gap-2 mb-6">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full p-3 border rounded text-lg font-mono bg-gray-50 focus:outline-none"
              placeholder="Sua senha aparecerá aqui"
            />
            <button
              onClick={copyToClipboard}
              className={`p-3 rounded transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              title="Copiar senha"
            >
              {copied ? '✔️' : '📋'}
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Comprimento: <span className="font-bold">{length}</span></label>
            <input
              type="range"
              min="4"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <button
            onClick={generatePassword}
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold text-lg shadow hover:from-blue-600 hover:to-blue-800 transition-colors mb-4"
          >
            Gerar Nova Senha
          </button>

          {password && (
            <div className="mt-4 p-3 bg-gray-100 rounded text-center">
              <p className="text-sm text-gray-600 mb-1">Senha gerada:</p>
              <p className="font-mono text-lg break-all select-all">{password}</p>
            </div>
          )}
        </div>
      </main>
      <footer className="text-center text-gray-500 py-4 text-sm">
        &copy; {new Date().getFullYear()} Gerador de Senhas. Todos os direitos reservados.
      </footer>
    </div>
  )
} 