/**
 * Created by Anujan Murugesu on 2017-06-01.
 */

function projectDisplay ()
{
    if (!document.querySelector ||
        !('classList' in document.body)) {
        return false;
    }
    var box = document.querySelector('#projects');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.previous');

    var counter = 0;
    var items = box.querySelectorAll('.block');
    var amount = items.length;
    var current = items[0];
    //box.classList.add('active');
    function navigate(direction) {
        current.classList.remove('active');

        // calculate position
        counter = counter + direction;

        if (direction === -1 && counter < 0) {
            counter = amount - 1;
        }

        if (direction === 1 && !items[counter]) {
            counter = 0;
        }
        // set new current element
        current = items[counter];
        current.classList.add('active');
    }
    // add event handlers
    next.addEventListener('click', function(ev) {
        navigate(1);
    });
    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });
    // show the first element
    navigate(0);
};