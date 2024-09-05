import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

// describe('Pruebas en 08-imp-exp', () => {
//     test('getHeroeById debe de retornar un heroe', () => {
//         const id = 1;
//         const hero = getHeroeById(id);
//         console.log(hero);
//         expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
//     });
// });
// describe('Pruebas en 08-imp-exp', () => {
//     test('getHeroeById debe de retornar un undefined si el heroe no existe', () => {
//         const id = 100;
//         const hero = getHeroeById(id);
//         console.log(hero);
//         expect(hero).toBeFalsy(); //el falso se toma como falsy, es decir: undefined, null y false se toman como falsy
//     });
// });
describe('Pruebas en 08-imp-exp DC', () => {
    test('getHeroeByOwner debe de retornar un heroe DC', () => {
        const ownerDc = 'DC';

        const heroDC = getHeroesByOwner(ownerDc);


        expect(heroDC).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]);
        

    });
});

describe('Pruebas en 08-imp-exp Marvel', () => {
    test('getHeroeByOwner debe de retornar un heroe Marvel', () => {

        const ownerMarvel = 'Marvel'

        const heroMarvel = getHeroesByOwner(ownerMarvel);

 
        console.log(heroMarvel.length);
        expect(heroMarvel.length).toBe(2)
    });
});

// Tarea: 
// getHeroesByOwner