
// Risk tests images name
const RTIN = [
    'panel_integral.png',
    'cardiovascular.png',
    'cancer.png' //CHECK SIZE
];

// Diagnostics tests images name
const DTIN = [
    'cardiologia.png',
    'dermatologia.png',
    'pediatria.png', //CHECK SIZE
    'inmunologia.png',
    'neurologia.png',
    'oftalmologia.png',
    'tamiz-recien-nacido.png',
    'trastornos-metabolicos.png',
    'hematologia.png',
    'exoma.png', //CHECK SIZE
    'nefrologia.png',
    'endocrinologia.png'
];

// Reproductive health images name
const RHIN = [
    'aborto.png', // CHECK SIZE
    'diagnostico_prenatal.png',
    'portadores.png',
    'preimplantacion.png'
];

let rt_counter = 0;
let dt_counter = 0;
let rh_counter = 0;

// animate__animated animate__fadeIn
// $(document).ready(function() {
//     setInterval(function() {
//         // Risk tests
//         $('#risk_tests_img').attr('src', `assets/img/tests/risk_tests/${RTIN[rt_counter]}`);
//         rt_counter == 2 ? rt_counter = 0 : rt_counter++;

//         // Diagnostics tests
//         $('#diagnostics_test_img').attr('src', `assets/img/home/services/${DTIN[dt_counter]}`);
//         dt_counter == 11 ? dt_counter = 0 : dt_counter++;
        
//         // Reproductive health
//         $('#reproductive_health_img').attr('src', `assets/img/tests/reproductive_health/${RHIN[rh_counter]}`);
//         rh_counter == 3 ? rh_counter = 0 : rh_counter++;
//     }, 3400);
// });

$(document).ready(function() {
    setInterval(function() {
        // Risk tests
        $('#risk_tests_img img').remove();
        
        setTimeout(() => {
            $('#risk_tests_img').append(`
                <img class="icons-tests animate__animated animate__infinite animate__fadeIn infinite" src="assets/img/tests/risk_tests/${RTIN[rt_counter]}" style="--animate-duration: 3s;">
            `);
        }, 200);
        rt_counter == 2 ? rt_counter = 0 : rt_counter++;

        // Diagnostics tests
        $('#diagnostics_test_img img').remove();
        
        setTimeout(() => {
            $('#diagnostics_test_img').append(`
                <img class="icons-tests animate__animated animate__infinite animate__fadeIn infinite" src="assets/img/home/services/${DTIN[dt_counter]}" style="--animate-duration: 3s;">
            `);
        }, 200);
        dt_counter == 11 ? dt_counter = 0 : dt_counter++;
        
        // Reproductive health
        $('#reproductive_health_img img').remove();
        
        setTimeout(() => {
            $('#reproductive_health_img').append(`
                <img class="icons-tests animate__animated animate__infinite animate__fadeIn infinite" src="assets/img/tests/reproductive_health/${RHIN[rh_counter]}" style="--animate-duration: 3s;">
            `);
        }, 200);
        rh_counter == 3 ? rh_counter = 0 : rh_counter++;
    }, 3000);
});
