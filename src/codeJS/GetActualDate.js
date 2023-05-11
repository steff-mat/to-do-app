export default function GetActualDate(date) {
  Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  };
  return (document.getElementById(date).value = new Date().toDateInputValue());
}
