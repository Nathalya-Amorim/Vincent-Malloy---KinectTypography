(() => {
    // grab a ref to the audio
    let track = document.querySelector('audio'),
        startBut = document.querySelector('.start-button');

    function startTextAnim() {
        // add some animation classes to the main text animation paths
        let textAnimPaths = document.querySelectorAll('#firstFive > path, #secondFive > path, #lastOne > path'),
            vincentImage = document.querySelector('.vincent-zoom');


        textAnimPaths.forEach(path => path.classList.add('text-fade'));

        vincentImage.classList.add('zoom-vincent');
      

        // hide the play button
        startBut.classList.add('hidden');
    }

    function setup() {
        // animate the start screen away
        // select the pieces
        let introPieces = document.querySelectorAll("#Intro g"),
            kinect = document.querySelector("#Intro #kinect"),
            vincentImg = document.querySelector('.vincent-intro'),
            firstFive = document.querySelectorAll('#firstFive > path'),
            secondFive = document.querySelectorAll('#secondFive > path'),
            lastOne = document.querySelectorAll('#lastOne > path '),
            malloyImage = document.querySelector('#vincentImgRight');
         
        // start the audio
        console.log(firstFive, secondFive);
        track.play();

        // Hide cat
        startBut.classList.add("hidden");
        
        // add the animation class to make them disappear
        kinect.classList.add("intro-fade");
        introPieces.forEach(piece => piece.classList.add('intro-fade'));
        firstFive.forEach(piece => piece.classList.add('intro-fade'));
        secondFive.forEach(piece => piece.classList.add('intro-fade'));
        lastOne.forEach(piece => piece.classList.add('intro-fade'));

        
 
        vincentImg.addEventListener('animationend', startTextAnim);

        // add vincent's animation class and move him left
        vincentImg.classList.add('animate-vincent');
        malloyImage.classList.add('moveRight');
        

    }

    startBut.addEventListener('click', setup);
})();