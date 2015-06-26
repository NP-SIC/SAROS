/*global require*/
'use strict';

require([
    'backbone',
    'plancookie',
    'routers/router',
    'views/main_bar',
    'views/timelines',
    'routers/planbbb'
], function (Backbone, plancookie, Router, MainBarView, TimelinesView, PlanBbb) {


    //var PlanBbb = Backbone.View.extend({
    //
    //    initialize: function() {
    //
    //       Backbone.history.start({root: 'actions'});
    //        PlanBbb.Router = Router;
    //    },
    //
    //    render: function () {
    //        return this;
    //    }
    //});
    //
    //var planBbb = new PlanBbb();


    var coll = new Backbone.Collection ();

    coll.url = '/index.php?ajax=true&c=plan&a=get_user_profile';

    coll.fetch({
        success:  function (collection, response) {

                var usr1 = collection.first().get ('contact');
                PlanBbb.mainBar =  new MainBarView (new Backbone.Collection([usr1]));
                PlanBbb.tv = new TimelinesView (new Backbone.Collection ([{"id" : 0}]));

            },
        error: function (collection, response) {

                PlanBbb.Router.navigate("/index.php", true);
            }
    });
});
