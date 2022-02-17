var experties = $(".experties").select2({
    placeholder: "Make a selection",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});


var skill = $(".skills").select2({
    placeholder: "Make a selection",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});

var day = $(".days").select2({
    placeholder: "Choose your avaliablity",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});


var time = $(".time").select2({
    placeholder: "Select your timezone",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});

var timeSlot = $(".timeslot").select2({
    placeholder: "Select your time",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});

var timeSlot = $(".qualification").select2({
    placeholder: "Choose your qualification",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});


var gender = $(".gender").select2({
    placeholder: "Choose your qualification",
    maximumSelectionLength: 1,
    allowClear: true,
    tags: false,
    closeOnSelect: true,
});


var country = $(".country").select2({
    placeholder: "Choose your qualification",
    maximumSelectionLength: 1,
    allowClear: true,
    tags: false,
    closeOnSelect: true,
});


var city = $(".city").select2({
    placeholder: "Choose your qualification",
    maximumSelectionLength: 1,
    allowClear: true,
    tags: false,
    closeOnSelect: true,
});



$('#skills button').on('click', function() {
    $('#skills').hide()
    $('#education').show()

})

$('#education button').on('click', function() {
    $('#skills').hide()
    $('#education').hide()
    $('#personal').show()


})