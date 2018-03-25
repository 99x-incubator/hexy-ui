$("#launchButton").bind({
    click: function () {
        var slider_width = $('.cc-side-bar').width(); //get width automaticly
        if ($(this).css("margin-left") == slider_width + "px" && !$(this).is(':animated')) {
            $('.cc-side-bar,#launchButton, #pageLoader').animate({
                "margin-left": '-=' + slider_width
            });
        } else {
            if (!$(this).is(':animated')) //perevent double click to double margin
            {
                $('.cc-side-bar,#launchButton, #pageLoader').animate({
                    "margin-left": '+=' + slider_width
                });
            }
        }
    }
});

$("#headerContainer").load('section/header.html');


$("#loadIcons").bind({
    click: function () {

        $("#midContainer").load('section/icons.html');
    }
});
$("#loadFormTypes").bind({
    click: function () {

        $("#midContainer").load('section/form-types.html');
       
    }
});
$("#loadButtons").bind({
    click: function () {

        $("#midContainer").load('section/buttons.html');
    }
});
$("#loadAlerts").bind({
    click: function () {

        $("#midContainer").load('section/alerts.html');
    }
});
$("#loadTabs").bind({
    click: function () {

        $("#midContainer").load('section/tabs.html');
    }
});
$("#loadTable").bind({
    click: function () {

        $("#midContainer").load('section/table.html');
    }
});
$("#loadSelect").bind({
    click: function () {

        $("#midContainer").load('section/select.html');
    }
});
$("#loadFields").bind({
    click: function () {

        $("#midContainer").load('section/fields.html');
    }
});
$("#loadTypography").bind({
    click: function () {

        $("#midContainer").load('section/typography.html');
    }
});
$("#loadStack").bind({
    click: function () {

        $("#midContainer").load('section/stack.html');
    }
});
$("#loadMenu").bind({
    click: function () {

        $("#midContainer").load('section/menu.html');
    }
});
$("#loadBreadcrumbs").bind({
    click: function () {

        $("#midContainer").load('section/breadcrumbs.html');
    }
});