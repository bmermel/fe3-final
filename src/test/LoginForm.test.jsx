import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";


describe('Login Form testing', () => {
    test('Should render title', () => {
        render(<LoginForm/>)
        const title = screen.getByText(/acceder a recetas dh/i)
        expect(title).toBeDefined()
    })
    test('Should render first input', () => {
        render(<LoginForm/>)
        const email = screen.getByRole('email')
        expect(email).toBeDefined()
    })
    test('Should change second input', () => {
        render(<LoginForm/>)
        const password = screen.getByTestId('password')
        fireEvent.change(password, {target: {value: 'contraseña123'}}) //event.target.value
        expect(password.value).toBe('contraseña123')
    })
    test('Should call onClick function', () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})