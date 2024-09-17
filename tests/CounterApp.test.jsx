import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";


// ## test: debe de hacer match con el snapshot
// ## test: debe de mostrar el valor inicial de 100 <CounterApp value={100}>


describe('Haciendo pruebas en CounterApp',() => { 
    const valorInicial = 10;
    test('debe de hacer match con el snapshot',() => { 

        const {container} = render(
            <CounterApp value={valorInicial}/>
        )
        console.log(container);
        expect(container).toMatchSnapshot();

    });
    test('debe de mostrar el valor inicial de 100',() => { 

        const {container} = render(
            <CounterApp value = {valorInicial}/>
        )
        const h2 = container.querySelector('h2');
        expect(h2.innerHTML).toBe(valorInicial.toString());

        // otras formas de hacerlo : 
        // expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2}).innerHTML ).toContain('100');
    });

    test('debe de incrementar con el boton +1',() => { 
        render(
        <CounterApp
            value={valorInicial}
        />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('debe de decrementar con el boton -1',() => { 
        render(
        <CounterApp
            value={valorInicial}
        />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });
    test('debe de funcionar el boton reset',() => { 
        render(
        <CounterApp
            value={200}
        />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));
        //con aria-label en el atributo. 
        // expect(screen.getByText('200')).toBeTruthy;
        expect(screen.getByText('200')).toBeTruthy;
    });
});