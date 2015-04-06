var gpl =  gpl || {};

gpl.main = {
    verbIndex: 0,
    verbArray: [ 'DEVELOPERS', 'BICYCLISTS', 'BUSINESS ANALYSTS', 'PROGRAMMING NINJAS', 'STRATEGY CONSULTANTS', 'THE TEAM YOU NEED', 'SUCCESS BUILDERS', 'BREAKDANCERS', 'CRIME FIGHTERS', 'PROCESS-ORIENTED'],
    activeTeamMemberClass: "active-team-member",
    smallScreenWidth: 1255,
    isRunning: false,

    initialize: function(){
        this.initializeVerbSwitch();
        this.initializeWindowResize();
        this.initializeScrolls();
        this.initializeTeamDescriptions();
    },

    initializeVerbSwitch: function(){
        window.setInterval(function(){
            gpl.main.setVerbIndex();
            var newVerbText = gpl.main.verbArray[gpl.main.verbIndex];

            jQuery('#verb-switch').fadeOut(500, function() {
                jQuery(this).text(newVerbText).fadeIn(500);
            });
        }, 5000);
    },

    setVerbIndex: function(){
        if(this.verbIndex == this.verbArray.length-1){
            this.verbIndex = 0;
        }
        else{
            this.verbIndex += 1;
        }
    },

    initializeTeamDescriptions: function(){
        jQuery( ".team-image" ).click(function(){
            if(gpl.main.isRunning){
                return;
            }

            gpl.main.isRunning = true;
            var teamMemberImage = jQuery(this);
            var teamMemberDescription = teamMemberImage.next();
            var currentActiveTeamMember = jQuery("." + gpl.main.activeTeamMemberClass)[0];

            if (currentActiveTeamMember) {
                jQuery(currentActiveTeamMember).next().hide("slow", function () {
                    gpl.main.activateTeamMember(teamMemberImage, teamMemberDescription);
                });
            }
            else {
                gpl.main.activateTeamMember(teamMemberImage, teamMemberDescription);
            }
        });
    },

    initializeWindowResize: function(){
        jQuery( window ).resize(function() {
            var activeTeamMembers = jQuery("." + gpl.main.activeTeamMemberClass);
            if(activeTeamMembers.length){
                var teamMemberImage = jQuery(activeTeamMembers[0]);
                var teamMemberDescription = teamMemberImage.next();
                gpl.main.calculateLeftPaddingOfDescription(teamMemberImage, teamMemberDescription);
            }

        });
    },

    initializeScrolls: function(){
        jQuery( ".scroll-to" ).click(function(){
            var link = jQuery(this);
            var scrollTo = link.attr('scrollTo');

            if(jQuery("#" + scrollTo).length) {
                $('html, body').animate({
                    scrollTop: jQuery("#" + scrollTo).offset().top - 30
                }, 2000);
            }

        });
    },

    calculateLeftPaddingOfDescription: function(imageSlide, teamMemberDescription){
        var teamLeft = jQuery("#first-team-image").position().left;
        var descriptionLeft = imageSlide.offset().left;
        var newDescriptionLeft = 9999 - (descriptionLeft - teamLeft);

        teamMemberDescription.css("padding-left", newDescriptionLeft);
    },

    activateTeamMember: function(teamMemberImage, teamMemberDescription){
        if (teamMemberImage.hasClass(gpl.main.activeTeamMemberClass)) {
            teamMemberImage.removeClass(gpl.main.activeTeamMemberClass);

            gpl.main.isRunning = false;
        }
        else {
            gpl.main.calculateLeftPaddingOfDescription(teamMemberImage, teamMemberDescription);
            teamMemberDescription.show("slow", function () {
                jQuery(jQuery("." + gpl.main.activeTeamMemberClass)[0]).removeClass(gpl.main.activeTeamMemberClass);

                teamMemberImage.addClass(gpl.main.activeTeamMemberClass);
                gpl.main.isRunning = false;
            });
        }
    }
}

gpl.main.initialize();

