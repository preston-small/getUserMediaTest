navigator.mediaDevices.getDisplayMedia({ video: true })
    .then(stream => {
        // Use the stream, e.g., display it in a video element
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        document.body.appendChild(videoElement);

        videoElement.play();
    })
    .catch(error => {
        console.error('Error accessing screen:', error);
    });