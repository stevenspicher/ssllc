
export  const  useEffect_loadMissionBoxes = (useEffect) => {
    useEffect(() => {
        // Assume we have an array of refs to our boxes
        const boxes = Array.from(document.querySelectorAll('.box'));

        // Add 'fade-in' class to each box over 500ms interval
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('boxFade-in');
            }, index * 500);
        });
    }, []);
}

