test('Devo conhecer as principais assertivas do jest', () => {
    let number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});


// Comentario

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'john', mail: 'john@mail.com' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'john');
    expect(obj.name).toBe('john');
});
