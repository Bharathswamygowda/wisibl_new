var category = $(".category").select2({
    dropdownParent: $('#createCampaign'),
    placeholder: "Make a selection",
    allowClear: true,
    tags: false,
    closeOnSelect: false,
});

var followers = $(".followers").select2({
    dropdownParent: $('#createCampaign'),
    placeholder: "Make a selection",
    allowClear: true,
    tags: false,
    closeOnSelect: false,
});