const submitBtn = document.querySelector('.add-form__submit-btn');

// let nameInput, nationalityInput, imageLinkInput;
// [nameInput, nationalityInput, imageLinkInput] = document.querySelectorAll('.edit-form>input');

submitBtn.addEventListener('click', (ev) => {

    invalidMsg = [];

    document.querySelectorAll('.add-form>input').forEach(input => {
        if (!input.value) invalidMsg.push(input.name)
    })

    if (invalidMsg.length > 0) {

        ev.preventDefault()

        let messageEl = document.createElement('p');

        messageEl.innerText = invalidMsg.reduce((msg, input) => {
            return msg.concat(input, "\n");
        }, 'The following fields are empty:\n')

        document.querySelector('.add-form').append(messageEl);
    }
})