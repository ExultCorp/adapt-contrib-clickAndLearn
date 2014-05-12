/*
 * adapt-contrib-clickAndLearn
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Himanshu Rajotia <himanshu.rajotia@credipoint.com>, CrediPoint Solutions <git@credipoint.com>
 */

define(function(require) {
  var ComponentView = require('coreViews/componentView');
  var Adapt = require('coreJS/adapt');

  var ClickAndLearn = ComponentView.extend({

    events: {
      'click .clickAndLearn-indicator': 'onClickDisplayItem',
      'click .clickAndLearn-indicator-img': 'onClickDisplayItem',
      'click .clickAndLearn-popup-close': 'onClickCloseItem'
    },

    preRender: function() {
      this.listenTo(Adapt, 'device:resize', this.resizeControl, this);
    },

    // This function called on triggering of device resize event of Adapt.
    resizeControl: function() {
      this.setDeviceSize();
      var tabViewContainer = this.$('.clickAndLearn-tabViewContainer');
      if (!this.model.get('_isDesktop')) {
        tabViewContainer.hide();
      } else if (this.getVisitedItems().length > 0) {
        tabViewContainer.show();
      }
    },

    // set component variable according to size of screen.
    setDeviceSize: function() {
      if (Adapt.device.screenSize === 'large') {
        this.$el.addClass('desktop').removeClass('mobile');
        this.model.set('_isDesktop', true);
      } else {
        this.$el.addClass('mobile').removeClass('desktop');
        this.model.set('_isDesktop', false)
      }
    },

    // this is use to set ready status for current component on postRender.
    postRender: function() {
      ComponentView.prototype.postRender.apply(this);
      this.setDeviceSize();
      var flag = this.model.get('_flag');
      if (flag == "horizontal") {
        this.$('.clickAndLearn-container').addClass('clickAndLearn-horizontal');
      }
      else if (flag == "vertical") {
        this.$('.clickAndLearn-container').addClass('clickAndLearn-vertical');
      }
      this.$('.clickAndLearn-tabViewContainer').show();
      this.setReadyStatus();
    },

    // handler function for click event on indicator element.
    onClickDisplayItem: function(event) {
      if (event) event.preventDefault();
      var $selectedElement = $(event.target);
      var idNumber = this.$('.clickAndLearn-indicator').index($selectedElement.closest('.clickAndLearn-indicator'));

      this.setDeviceSize();
      var tabViewContainer = this.$('.clickAndLearn-tabViewContainer');
      if (!this.model.get('_isDesktop')) {
        tabViewContainer.hide();
      } else if (this.getVisitedItems().length > 0) {
        tabViewContainer.show();
      }

      this.$('.clickAndLearn-navContainer .clickAndLearn-indicator').removeClass('clickAndLearn-indicatorActive');
      if ($selectedElement.hasClass('clickAndLearn-indicator-img')) {
        $selectedElement.closest('.clickAndLearn-indicator').addClass('clickAndLearn-indicatorActive');
      } else {
        $selectedElement.addClass('clickAndLearn-indicatorActive');
      }
      this.$('.clickAndLearn-tabViewContainer .clickAndLearn-tabItem').hide();
      this.$('.clickAndLearn-tabViewContainer .clickAndLearn-tabItem:eq(' + idNumber + ')').show();

      if (!this.model.get('_isDesktop')) {
        var popup = this.$('.clickAndLearn-popup');
        popup.removeClass('clickAndLearn-hidden');

        popup.find('.clickAndLearn-popup-toolbar-title').hide();
        popup.find('.clickAndLearn-popup-content').hide();

        popup.find('.clickAndLearn-popup-toolbar-title:eq(' + idNumber + ')').show();
        popup.find('.clickAndLearn-popup-content:eq(' + idNumber + ')').show();
      }
      this.setVisited(idNumber);
    },

    // Click or Touch event handler for pop-close.
    onClickCloseItem: function(event) {
      if (event) event.preventDefault();
      this.$('.clickAndLearn-popup-close').blur();
      this.$('.clickAndLearn-popup').addClass('clickAndLearn-hidden');
    },

    // This function will set the visited status for particular flipCard item.
    setVisited: function(index) {
      var item = this.model.get('items')[index];
      item._isVisited = true;
      this.checkCompletionStatus();
    },

    // This function will be used to get visited states of all flipCard items.
    getVisitedItems: function() {
      return _.filter(this.model.get('items'), function(item) {
        return item._isVisited;
      });
    },

    // This function will check or set the completion status of current component.
    checkCompletionStatus: function() {
      if (!this.model.get('_isComplete')) {
        if (this.getVisitedItems().length === this.model.get('items').length) {
          this.setCompletionStatus();
        }
      }
    }

  });

  Adapt.register('clickAndLearn', ClickAndLearn);
  return ClickAndLearn;

});