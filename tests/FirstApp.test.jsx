import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 

    // test('Debe de hacer match con el snapshot', () => { 

    //     const title = 'Hoy soy titardox';
    //     const { container } = render( <FirstApp title={title}/>);

    //     //console.log(container);

            // hay que tener cuidado a la hora de usar el snapshot porque incluso los atributos ayudan a cambiar.
    //     expect(container).toMatchSnapshot();

    // });

    test('Debe de mostrar un titulo en h1', () => { 
        const title = 'Hoy soy titardox';
        const { container, getByText, getByTestId } = render( <FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toBe(title);
        expect( getByTestId('test-title') ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toBe(title);

     });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hoy soy titardox';
        const subTitle = 'Soy un subtitulo';
        
        // const { getByText   } = render(
        const { getAllByText   } = render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );

        // expect( getByText(subTitle) ).toBeTruthy();
        
        expect( getAllByText(subTitle).length ).toBe(2);

    } )


});