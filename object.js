
//object er element can be array,object

const student={
    name: 'nishat tasnim',
    id: 121,
    add:'movie cinema',
    isSingle: true,
    friends: ['nobo','putu','mim','adu'],
    movie:[{movie:'daruchinidip', year:1990},{movie:'king khan',year: 2018}],
    act: function(){
        console.log('act like sakib');
    },
    car:{
        brand:'lamborgini',
        price:10000000,
        buy:2030,
        manufacturer:{
            name: 'arefin bd',
            ceo:'arefin islam',
            country:'bangladesh'
        }
    }
}
console.log(student);
console.log(student.car);
console.log(student.car.manufacturer);
console.log(student.movie);
student.act();