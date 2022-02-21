var category = $(".category").select2({
    dropdownParent: $('#createCampaign'),
    placeholder: "Make a selection",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});

var followers = $(".followers").select2({
    dropdownParent: $('#createCampaign'),
    placeholder: "Make a selection",
    allowClear: true,
    tags: true,
    closeOnSelect: true,
});