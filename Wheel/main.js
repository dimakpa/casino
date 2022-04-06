document.querySelector('body').style.backgroundColor = '#0f212e'
document.querySelector('body').style.color = 'fff'

let theWheel = new Winwheel({
    'outerRadius'     : 300,        // Set outer radius so wheel fits inside the background.
    'innerRadius'     : 270,         // Make wheel hollow so segments dont go all way to center.
    'textFontSize'    : 0,         // Set default font size for the segments.
    'textOrientation' : 'curved', // Make text vertial so goes down from the outside of wheel.
    'textAlignment'   : 'outer',    // Align text to outside of wheel.
    'numSegments'     : 31,         // Specify number of segments.
    'segments'        :             // Define segments including colour and text.
        [                               // font size and text colour overridden on backrupt segments.
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#7e46fc', 'text' : '30.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fba22f', 'text' : '4.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#d4e7f1', 'text' : '1.70×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fce805', 'text' : '2.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#00e304', 'text' : '1.50×'},

            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#00e304', 'text' : '1.50×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#00e304', 'text' : '1.50×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#d4e7f1', 'text' : '1.70×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fce805', 'text' : '2.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#00e304', 'text' : '1.50×'},

            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fce805', 'text' : '2.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fba22f', 'text' : '4.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fce805', 'text' : '2.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#fce805', 'text' : '2.00×'},
            {'fillStyle' : '#406c81', 'text' : '0.00×'},
            {'fillStyle' : '#00e304', 'text' : '1.50×'},
            //{'fillStyle' : '#ffffff', 'text' : 'LOOSE TURN', 'textFontSize' : 12}
        ],
    'animation' :           // Specify the animation to use.
        {
            'type'     : 'spinToStop',
            'duration' : 5,
            'spins'    : 3,
            'callbackFinished' : alertPrize,  // Function to call whent the spinning has stopped.
            'callbackSound'    : playSound,   // Called when the tick sound is to be played.
            //'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound.
        },
});


c = theWheel.ctx;

// Create pointer.
// if (c) {
//     c.save();
//     c.lineWidth = 2;
//     c.strokeStyle = 'white';
//     c.fillStyle = 'white';
//     c.beginPath();
//     c.moveTo(480, 10);
//     c.lineTo(520, 10);
//     c.lineTo(500, 42);
//     c.lineTo(480, 10);
//     c.stroke();
//     c.fill();
//     c.restore();
// }
// Loads the tick audio sound in to an audio object.
let audio = new Audio('wheel_spin.mp3');

// This function is called when the sound is to be played.
function playSound()
{
    // Stop and rewind the sound if it already happens to be playing.
    //audio.pause();
    //audio.currentTime = 0;

    // Play the sound.
    audio.play();
}


function change(text, color){
    document.getElementById("simple").innerHTML=text;
    document.getElementById("simple").style.color=color;
}

// Called when the animation has finished.
function alertPrize(indicatedSegment)
{
    // Display different message if win/lose/backrupt.
    if (indicatedSegment.text == 'LOOSE TURN') {
        alert('Sorry but you loose a turn.');
    } else if (indicatedSegment.text == 'BANKRUPT') {
        alert('Oh no, you have gone BANKRUPT!');
    } else {
        change(indicatedSegment.text, indicatedSegment.fillStyle)
    }
}

//function text_out(){ }
//var p;
//p = document.getElementById('text_change');
//p.innerHTML = 'Текст заменили';