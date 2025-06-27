'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [copied, setCopied] = useState(false)
  const [dark, setDark] = useState(false)

  // Detecta preferência do sistema e localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setDark(saved === 'dark')
      document.documentElement.classList.toggle('dark', saved === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  // Atualiza o tema ao alternar
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors">
      <header className="bg-blue-700 dark:bg-gray-900 text-white py-4 shadow-md sticky top-0 z-10 flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold text-center tracking-tight w-full">Gerador de Senhas</h1>
        <button
          onClick={() => setDark((d) => !d)}
          className="ml-4 p-2 rounded bg-white/10 hover:bg-white/20 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          title="Alternar tema"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mt-8 transition-colors">
          <div className="flex items-center gap-2 mb-6">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full p-3 border rounded text-lg font-mono bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none transition-colors"
              placeholder="Sua senha aparecerá aqui"
            />
            <button
              onClick={copyToClipboard}
              className={`p-3 rounded transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800'}`}
              title="Copiar senha"
            >
              {copied ? '✔️' : '📋'}
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium dark:text-white">Comprimento: <span className="font-bold">{length}</span></label>
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
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900 text-white rounded-lg font-semibold text-lg shadow hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-gray-900 transition-colors mb-4"
          >
            Gerar Nova Senha
          </button>

          {password && (
            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-center transition-colors">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Senha gerada:</p>
              <p className="font-mono text-lg break-all select-all dark:text-white">{password}</p>
            </div>
          )}
        </div>
      </main>
      <footer className="text-center text-gray-500 dark:text-gray-400 py-4 text-sm transition-colors">
        &copy; {new Date().getFullYear()} Gerador de Senhas. Todos os direitos reservados.
      </footer>
    </div>
  )
} 