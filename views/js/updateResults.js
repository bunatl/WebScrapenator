
//search for element only after all DOMs are loaded
window.addEventListener('DOMContentLoaded', (event) => {
    const paramInputs = document.querySelectorAll('.inputField');

    // assign listner to every input field
    paramInputs.forEach(el => el.addEventListener('input', event => {
        //check if any results are there

        // update results

    }));
});