describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe fallar', () => {

        // 1 Incialización
        const message1 = 'Hola mundo';

        // 2 Estimulo
        const message2 = message1.trim();

        //3 Observar el comportamiento
        expect(message1).toBe(message2);
    });


})

