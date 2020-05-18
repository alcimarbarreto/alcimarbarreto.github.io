window.addEventListener('load', start);
function start() {
  const Rrange = document.querySelector('#Rrange');
  const Rinput = document.querySelector('#Rinput');
  const Grange = document.querySelector('#Grange');
  const Ginput = document.querySelector('#Ginput');
  const Brange = document.querySelector('#Brange');
  const Binput = document.querySelector('#Binput');
  const quadrado = document.querySelector('#cor');
  const hexa = document.querySelector('#hex');

  function passavalor() {
    Rinput.value = Rrange.value;
    Ginput.value = Grange.value;
    Binput.value = Brange.value;
    mudarcor();
  }

  function passarange() {
    Rrange.value = Rinput.value;
    Grange.value = Ginput.value;
    Brange.value = Binput.value;
    mudarcor();
  }

  function mudarcor() {
    function normalize() {
      if (Rinput.value > 255) {
        Rinput.value = 255;
      }
      if (Ginput.value > 255) {
        Ginput.value = 255;
      }
      if (Binput.value > 255) {
        Binput.value = 255;
      }
    }

    let r = Rinput.value || 0;
    let g = Ginput.value || 0;
    let b = Binput.value || 0;

    function colorir() {
      var cor = 'rgb(' + r + ',' + g + ',' + b + ')';
      quadrado.style.backgroundColor = cor;
    }
    function hex() {
      hexa.value =
        '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
    }

    normalize(), colorir(), hex();
  }

  Rrange.addEventListener('input', function () {
    passavalor();
  });
  Grange.addEventListener('input', function () {
    passavalor();
  });
  Brange.addEventListener('input', function () {
    passavalor();
  });
  Rinput.addEventListener('input', function () {
    passarange();
  });
  Ginput.addEventListener('input', function () {
    passarange();
  });
  Binput.addEventListener('input', function () {
    passarange();
  });
  mudarcor();
}
