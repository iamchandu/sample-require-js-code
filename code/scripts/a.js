requirejs.config({
      paths: {
          'jquery': 'https://code.jquery.com/jquery-3.4.1.min.js'
      }
  });

console.log('a init started.');
function alertMessage(){
      console.log('a trigered');
      $('#aValue').html($('#aInput').val());
}

requirejs(["jquery"], function($) {
      console.log('Jquery initialized.');
});

requirejs(["b","c"], function(b,c) {
      console.log('b init completed.');
      console.log('c init completed.');
});

requirejs(["d"], function(d) {
      console.log('d init completed.');
});
console.log('a init completed.');