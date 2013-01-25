define(function () {
    ko.bindingHandlers.validate = {
        update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var form = $(element),
                observable = valueAccessor();

            // disable all field
            $('[data-validate-field]', form).removeClass('validate-violated');

            // put errors
            $.each(observable(), function (k, v) {
                var field = $('[data-validate-field=' + k + ']', form);
                field.addClass('validate-violated');
                $('.validate-violation', field).text(v);
            });
        }
    };
});
