// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   }
//   else {
//     console.log('succes', temp)
//   }
//
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('promise success', temp);
// },
// function (err) {
//   console.log('promise error', err);
// });

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }

    else {
      reject('a and b need to be numbers');
    }
  });
}


addPromise(2, 3).then(function(sum) {
  console.log('succes', sum);
}, function (){
  console.log('error', err);
});

addPromise('camille', 3).then(function(sum) {
  console.log('ne t\'affiche pas');
}, function (err) {
  console.log('this should appear', err);
});
