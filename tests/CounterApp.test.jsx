import { CounterApp } from "../src/CounterApp";
import { render,screen } from "@testing-library/react";


// ## test: debe de hacer match con el snapshot
// ## test: debe de mostrar el valor inicial de 100 <CounterApp value={100}>


describe('Haciendo pruebas en CounterApp',() => { 
    const valor = 100;
    test('debe de hacer match con el snapshot',() => { 

        const {container} = render(
            <CounterApp value={valor}/>
        )
        console.log(container);
        expect(container).toMatchSnapshot();

    });
    test('debe de mostrar el valor inicial de 100',() => { 

        const {container} = render(
            <CounterApp value = {valor}/>
        )
        const h2 = container.querySelector('h2');
        expect(h2.innerHTML).toBe(valor.toString());

        // otras formas de hacerlo : 
        // expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2}).innerHTML ).toContain('100');
    })
});