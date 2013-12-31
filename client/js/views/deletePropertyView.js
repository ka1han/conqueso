/***************************************************************************
 * COPYRIGHT (C) 2013, Rapid7 LLC, Boston, MA, USA.
 * All rights reserved. This material contains unpublished, copyrighted
 * work including confidential and proprietary information of Rapid7.
 **************************************************************************/

define(["jquery", "underscore", "backbone", "bootstrap",
        "../broadcast",
        "hbars!templates/delete.template"],
function($, _, Backbone, Bootstrap, Broadcast, deleteTemplate) {
    
    return Backbone.View.extend({
        el : "#modal",

        events : {
            "click .yes-delete" : "confirmDelete",
            "click .option" : "optionSelected"
        },

        render: function() {
            this.$el.html(deleteTemplate()).modal("show");
        },

        optionSelected: function() {
            Broadcast.trigger("reoute:previous");
        },

        confirmDelete: function() {
            console.log("Remove property here");
            this.$el.modal("hide");
        }
    });

});