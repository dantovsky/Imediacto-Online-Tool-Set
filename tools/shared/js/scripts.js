// Global functions for tools
// ---------------------------------------------
function copyToClipboard(idElement = "output", checkId = 'check') {
    let element = document.getElementById(idElement);
    const typeElement = element.tagName.toLowerCase()

    if (typeElement === 'textarea') {
        selectAndCopy(element)
    } else if (typeElement === 'div') {
        const newTextarea = document.createElement('textarea')
        newTextarea.value = document.getElementById(idElement).innerHTML
        document.body.appendChild(newTextarea)
        selectAndCopy(newTextarea)
        newTextarea.remove()
    }

    let check = document.getElementById(checkId);
    check.classList.remove("none");
    setTimeout(() => {
        check.classList.add("none");
    }, 3000);
}

function selectAndCopy(element) {
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand("copy");
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

/* Old versions
function copyToClipboard(idElement = 'output') {
    let copyText = document.getElementById(idElement);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    let check = document.getElementById("check");
    check.classList.remove('none');
    setTimeout(() => {
        check.classList.add('none');
    }, 3000);
}
*/
