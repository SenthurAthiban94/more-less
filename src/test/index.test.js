import moreLess from './../';

test('Testing for the output',()=>{
    expect(
        moreLess('asldfjlsa saldfjds ',5)
    ).toBe('hello packages');
});