$(document).ready(function() {
    $('#show-burgers').click(function() {
        $('.menu-grid').addClass('hidden');
        $('#burgers').removeClass('hidden');
    });

    $('#show-drinks').click(function() {
        $('.menu-grid').addClass('hidden');
        $('#drinks').removeClass('hidden');
    });

    $('#show-sides').click(function() {
        $('.menu-grid').addClass('hidden');
        $('#sides').removeClass('hidden');
    });

    $('#show-desserts').click(function() {
        $('.menu-grid').addClass('hidden');
        $('#desserts').removeClass('hidden');
    });
});
