// Global functions for tools
// ---------------------------------------------
function copyToClipboard(idElement = "output") {
  let copyText = document.getElementById(idElement);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  let check = document.getElementById("check");
  check.classList.remove("none");
  setTimeout(() => {
    check.classList.add("none");
  }, 3000);
}

// Word count
function wordCount(idElement, maxLength = 100000) {
  var maxLength = maxLength;
  jQuery("#max-length-chars").text(maxLength);
  jQuery('textarea#' + idElement).attr("maxlength", maxLength);
  jQuery('textarea#' + idElement).keyup(function () {
    var textlen = jQuery(this).val().length;
    jQuery("#counting-chars").text(textlen);
  });
}
