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
    const generateButton = screen.getByTitle('Gerar nova senha')
    fireEvent.click(generateButton)
    const passwordInput = screen.getByRole('textbox')
    expect(passwordInput.value).toHaveLength(16)
  })
}) 