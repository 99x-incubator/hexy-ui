$(".cc-panel-controlls").bind({
    click: function (e) {
        $(this).next('.cc-code').toggle();
        $(this).next().next('.cc-content').toggle();
        var htmlText = $(this).next().next('.cc-content').html();
        $(this).next('.cc-code').text(htmlText);
    }
});