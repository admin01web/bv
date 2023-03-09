/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');
var mes1 = document.querySelector('.received-one-1');
var mes2 = document.querySelector('.received-one');
var mes3 = document.querySelector('.received-two');
var mesSent = document.querySelector('.sent');


function dots() {

    var bubble = document.querySelector('.bubble');
    if (bubble) {
        bubble.style.animation = "fadeIn .2s linear 0 none";
        bubble.style.opacity = "0";
    }
}
setTimeout(dots, 4100);

//1nd message
function mesOpen1() {
    if (mes1) {
        mes1.style.bottom = "0";
        mes1.style.animation = 'translating 0.2s linear';
        mes1.style.display = "block";
        mes1.classList.add('shownMess');
    }
}
setTimeout(mesOpen1, 4100);


function dotsVis() {

    var bubbleVis = document.querySelector('.bubble');
    if (bubbleVis) {
        bubbleVis.style.animation = "fadeIn .2s linear 0 none";
        bubbleVis.style.opacity = "1";
    }
}
setTimeout(dotsVis, 4500);


function dots1() {
    var bubble1 = document.querySelector('.bubble');
    if (bubble1) {
        bubble1.style.opacity = "0";
    }
}
setTimeout(dots1, 8500);

//2th message
function mesOpen2() {
    if (mes2) {
        mes2.style.bottom = "0";
        mes2.style.animation = 'translating 0.2s linear';
        mes2.style.display = "block";
        mes2.classList.add('shownMess');
    }
}
setTimeout(mesOpen2, 9500);



function dotsVis1() {

    var bubbleVis1 = document.querySelector('.bubble');
    if (bubbleVis1) {
        bubbleVis1.style.animation = "fadeIn .2s linear 0 none";
        bubbleVis1.style.opacity = "1";
    }
}
setTimeout(dotsVis1, 11000);


function dots11() {
    var bubble11 = document.querySelector('.bubble');
    if (bubble11) {
        bubble11.style.display = "none";
    }
}
setTimeout(dots11, 14500);

//3th message

function mesOpen3() {
    if (mes3) {
        mes3.style.bottom = "0";
        mes3.style.animation = 'translating 0.2s linear';
        mes3.style.display = "block";
        mes3.classList.add('shownMess');
    }
}
setTimeout(mesOpen3, 15000);



form.addEventListener('submit', newMessage);

function newMessage(e) {
    e.preventDefault();
    var input = e.target.input;

    if (input.value) {
        var message = buildMessage(input.value);
        //conversation.appendChild(message);
        let allShownMessages = document.querySelectorAll('.conversation-container .shownMess');
        //console.dir(allShownMessages);
        //return false;
        //document.querySelector('.conversation-container .shownMess:last-of-type').insertAdjacentElement('afterend', message);
        if (allShownMessages.length > 0) {
            allShownMessages[allShownMessages.length - 1].insertAdjacentElement('afterend', message);
            message.insertAdjacentHTML('afterend', '<div style="clear:both;"></div>');
        } else {
            document.querySelector('.conversation-container .data').insertAdjacentElement('afterend', message);
            message.insertAdjacentHTML('afterend', '<div style="clear:both;"></div>');
        }


        animateMessage(message);
        document.querySelector('.conversation-container').insertAdjacentElement('beforeend', document.querySelector('.bubble1'));


        function builDdots() {

            var bubbleLast = document.querySelector('.bubble1');
            var mes4 = document.querySelector('.received-three');
            var containerblur = document.querySelector('.photos-blur');
            bubbleLast.style.display = "block";
            console.log("builDdots1");
            if (containerblur.style.display === "block") {
                bubbleLast.style.display = "none";
                console.log("builDdots1-none");
            }
        }

        setTimeout(builDdots, 1000);

        // var mes3 = document.querySelector('.received-three');

        // if (mes3.style.display !== "block") {
        // 	bubbleLast.style.display = "none";
        // }
    }
    // if(!document.querySelector('.bubble')) {
    // 	setTimeout(builDdots, 1000);
    // } else {
    // 	document.querySelectorAll('.bubble').forEach( (item) => {
    // 		item.style.display = 'none';
    // 	});
    // 	setTimeout(builDdots, 1000);
    // }

    //1 photo

    function buildPhoto() {
        var elementPhoto = document.createElement('div');
        var container1 = document.querySelector('.photos');

        elementPhoto.classList.add('photo-girl1', 'shownMess');
        container1.appendChild(elementPhoto);
        elementPhoto.innerHTML = '<img src="img/photo1.jpg" alt="">';
        if (container1) {
            var bubbleLast = document.querySelector('.bubble1');
            bubbleLast.style.display = "none";
        }

        return elementPhoto;
    }
    if (!document.querySelector('.photo-girl1')) {
        setTimeout(buildPhoto, 3500);
    }

    //2 photo
    function buildPhoto2() {
        var elementPhoto2 = document.createElement('div');
        var container1 = document.querySelector('.photos');

        elementPhoto2.classList.add('photo-girl2', 'shownMess');
        container1.appendChild(elementPhoto2);
        elementPhoto2.innerHTML = '<img src="img/photo2.jpg" alt="">';


        return elementPhoto2;
    }
    if (!document.querySelector('.photo-girl2')) {
        setTimeout(buildPhoto2, 4500);
    }
    //3th message

    var mes4 = document.querySelector('.received-three');

    function builDdots1() {
        var bubbleLast = document.querySelector('.bubble1');
        bubbleLast.style.display = "block";
        console.log('builDdots2');
    }
    if (mes4.style.display !== "block") {
        setTimeout(builDdots1, 6500);
    }




    var bubbleLast = document.querySelector('.bubble1');

    function mesOpen3() {
        if (mes4) {

            mes4.style.bottom = "0";
            mes4.style.animation = 'none';
            mes4.style.display = "block";
            bubbleLast.style.display = "none";
            mes4.classList.add('shownMess');
        }
    }

    setTimeout(mesOpen3, 8500);


    var containerblur = document.querySelector('.photos-blur');

    function builDdots2() {
        var bubbleLast = document.querySelector('.bubble1');
        bubbleLast.style.display = "block";
        console.log('builDdots3');
    }
    if (containerblur.style.display !== "block") {
        setTimeout(builDdots2, 10500);
    }


    function builDdotsNone() {
        var bubbleLast = document.querySelector('.bubble1');
        bubbleLast.style.display = "none";
        console.log('builDdots3none');
    }
    setTimeout(builDdotsNone, 13000);


    //3 photo
    function buildPhotoBlur() {

        var elementPhotoblur = document.createElement('div');
        var containerblur = document.querySelector('.photos-blur');

        elementPhotoblur.classList.add('photo-girl3');
        containerblur.appendChild(elementPhotoblur);
        containerblur.style.display = 'block';
        elementPhotoblur.innerHTML = '<img src="img/photo3.jpg" alt="">';
        containerblur.classList.add('shownMess');

        var bubbleLast = document.querySelector('.bubble1');
        bubbleLast.style.display = "none";
        console.log('none');


        return elementPhotoblur;
    }

    if (!document.querySelector('.photo-girl3')) {
        setTimeout(buildPhotoBlur, 14500);
    }






    input.value = '';
    conversation.scrollTop = conversation.scrollHeight;

    e.preventDefault();
}



function buildMessage(text) {
    var element = document.createElement('div');

    element.classList.add('message', 'sent', 'shownMess');

    element.innerHTML = text +
        '<span class="metadata">' +
        '<span class="time"></span>' +
        '<span class="tick tick-animation">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
        '</span>' +
        '</span>';

    return element;
}

function animateMessage(message) {
    setTimeout(function() {
        var tick = message.querySelector('.tick');
        tick.classList.remove('tick-animation');
    }, 500);
}



function updateScroll() {
    var element = document.querySelector(".conversation-container");
    element.scrollTop = element.scrollHeight;
}

setInterval(updateScroll, 2500);