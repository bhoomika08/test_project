class HiddenText {
  constructor() {
    this.$module = $('div#blog');
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    let _this = this;
    this.$module.find("li").bind({
      "click": function() {
        event.preventDefault();
        _this.showHideText(this);
      } 
    });
  }

  showHideText(listItem) {
    let $listItem = $(listItem);
    $listItem.find("p.excerpt").slideToggle("slow");
    $listItem.siblings().find("p:visible").slideUp("slow");
  }
}

new HiddenText().init();