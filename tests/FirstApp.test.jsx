import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 

    test('Debe de hacer match con el snapshot', () => { 

        const title = 'Hoy soy titardox';
        const { container } = render( <FirstApp title={title}/>);

        //console.log(container);

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar un titulo en h1', () => { 
        const title = 'Hoy soy titardox';
        const { container, getByText } = render( <FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        console.log(h1.innerHTML);
        expect(h1.innerHTML).toBe(title);

     });



});