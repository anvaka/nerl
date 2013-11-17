module.exports = TimePicker;

function TimePicker (domRoot) {

  this.getTime = function () {
    return domRoot.timeInput;
  };
}

