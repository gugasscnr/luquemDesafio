import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders password generator', () => {
    render(<Home />)
    expect(screen.getByText('Gerador de Senhas')).toBeInTheDocument()
  })

  it('generates password with correct length', () => {
    render(<Home />)
    const lengthInput = screen.getByRole('slider')
    fireEvent.change(lengthInput, { target: { value: '16' } })
    const generateButton = screen.getByText('Gerar Nova Senha')
    fireEvent.click(generateButton)
    const passwordInput = screen.getByPlaceholderText('Sua senha aparecerá aqui')
    expect(passwordInput.value).toHaveLength(16)
  })

  it('deve exibir o título Gerador de Senhas', () => {
    render(<Home />)
    expect(screen.getByText('Gerador de Senhas')).toBeInTheDocument()
  })
}) 