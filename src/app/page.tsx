'use client'

import { useState } from 'react'
import { FaCopy, FaRedo } from 'react-icons/fa'

export default function Home() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [history, setHistory] = useState<string[]>([])

  const generatePassword = () => {
    let charset = ''
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    setPassword(newPassword)
    setHistory(prev => [newPassword, ...prev].slice(0, 5))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  const getPasswordStrength = (): { text: string; color: string } => {
    if (length < 8) return { text: 'Fraca', color: 'text-red-500' }
    if (length < 12) return { text: 'Média', color: 'text-yellow-500' }
    return { text: 'Forte', color: 'text-green-500' }
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
            className="p-2 bg-primary text-white rounded hover:bg-blue-600"
            title="Copiar senha"
          >
            <FaCopy />
          </button>
          <button
            onClick={generatePassword}
            className="p-2 bg-primary text-white rounded hover:bg-blue-600"
            title="Gerar nova senha"
          >
            <FaRedo />
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

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="mr-2"
              />
              Maiúsculas
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="mr-2"
              />
              Minúsculas
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="mr-2"
              />
              Números
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="mr-2"
              />
              Símbolos
            </label>
          </div>

          {password && (
            <div className="mt-4">
              <p>
                Força da senha:{' '}
                <span className={getPasswordStrength().color}>
                  {getPasswordStrength().text}
                </span>
              </p>
            </div>
          )}

          {history.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Histórico:</h3>
              <ul className="space-y-2">
                {history.map((pwd, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {pwd}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 