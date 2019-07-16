console.log('a init started.')
function alertMessage(){
      console.log('a trigered');
}

requirejs(["b","c"], function() {
      console.log('b init completed.');
      console.log('c init completed.');
});

requirejs(["d"], function() {
      console.log('d init completed.');
});
console.log('a init completed.');