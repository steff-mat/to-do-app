export default function TodayDate(date) {
  Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  };
  return (document.querySelector(date).value = new Date().toDateInputValue());
}
