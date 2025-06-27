'use client'

import { useState, useEffect, useCallback } from 'react'

export default function Home() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)
  const [useUpper, setUseUpper] = useState(true)
  const [useLower, setUseLower] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)

  // Detecta preferência do sistema/localStorage apenas no cliente
  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Sincroniza a classe do <html> e o localStorage
  useEffect(() => {
    if (!theme) return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      console.log('Tema aplicado: dark')
    } else {
      root.classList.remove('dark')
      // Força remoção de todas as ocorrências da classe 'dark'
      root.className = root.className.replace(/\bdark\b/g, '').trim()
      localStorage.setItem('theme', 'light')
      console.log('Tema aplicado: light')
    }
    // Debug: mostra classes atuais e valor do tema
    console.log('Theme state:', theme)
    console.log('Classes do <html> após efeito:', root.className)
  }, [theme])

  // Alterna o tema de forma robusta
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const generatePassword = () => {
    let charset = ''
    if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useNumbers) charset += '0123456789'
    if (useSymbols) charset += '!@#$%^&*'
    if (!charset) {
      setPassword('')
      return
    }
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

  // Só renderiza após detectar o tema
  if (!theme) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors">
      <header className="bg-blue-700 dark:bg-gray-900 text-white py-4 shadow-md sticky top-0 z-10 flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold text-center tracking-tight">Gerador de Senhas</h1>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded bg-white/10 hover:bg-white/20 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          title="Alternar tema"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
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

          {/* Opções de caracteres */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <label className="flex items-center gap-2 text-sm dark:text-white">
              <input type="checkbox" checked={useUpper} onChange={e => setUseUpper(e.target.checked)} /> Maiúsculas
            </label>
            <label className="flex items-center gap-2 text-sm dark:text-white">
              <input type="checkbox" checked={useLower} onChange={e => setUseLower(e.target.checked)} /> Minúsculas
            </label>
            <label className="flex items-center gap-2 text-sm dark:text-white">
              <input type="checkbox" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} /> Números
            </label>
            <label className="flex items-center gap-2 text-sm dark:text-white">
              <input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} /> Símbolos
            </label>
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