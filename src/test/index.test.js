import moreLess from './../';
let config = {
    id: 'testbtn',
    text: " this is a huge text with the updated more description",
    isMobile:false,
    shortTo:5,
    moreText:'Open more',
    lessText:'Open less',
    continuous:true
}

test('Testing for the output',()=>{
    expect(
        moreLess(config)
    ).toBe('hello packages');
});