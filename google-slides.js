SirTrevor.Blocks.GoogleSlides = (function () {

    return SirTrevor.Block.extend({

        /*
         provider: {
         regex: /foo(.+)bar/,
         html: "<iframe src="https://docs.google.com/presentation/d/1sgpEzKTjC79QvtuLszEIyw2aNnvywn2xPql7upaZIa0/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>"
         },
         */

        type: 'google_slides',
        title: 'GoogleSlides',

        pastable: true,

        paste_options: {
            html: "<div style=\"text-align:center; padding:20px;\">Enter <b>Google Slides</b> embed code<br /><input type=\"text\" class=\"st-paste-block\" style=\"width: 100%\" placeholder=\"Enter embed code\"></div>"
        },

        icon_name: 'iframe',

        loadData: function (data) {

            this.$editor.addClass('st-block__editor--with-square-media');

            /*
             var embed_string = this.provider.html
             .replace('{{remote_id}}', data.remote_id);
             */

            var embed_string = data.embed_code;

            this.$editor.html(embed_string);
        },

        onContentPasted: function (event) {
            this.handleDropPaste($(event.target).val());
        },

        handleDropPaste: function (embed_code) {
            var data;

            /*
             if (match !== null && !_.isUndefined(match[1])) {
             data = {
             remote_id: match[1]
             };

             this.setAndLoadData(data);
             }
             */

            data = {
                embed_code: embed_code
            };

            this.setAndLoadData(data);
        },

        onDrop: function (transferData) {
            var embed_code = transferData.getData('text/plain');
            this.handleDropPaste(embed_code);
        }
    });

})();
