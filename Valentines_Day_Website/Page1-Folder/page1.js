window.onload = () => {
    const bigBoxIds = ['box1', 'box2', 'box3'];
    let password = "";
    let completedBoxes = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * 9) + 1;
    }

    function generatePassword() {
        const numbers = new Set();
        while (numbers.size < 3) {
            numbers.add(getRandomNumber());
        }
        password = Array.from(numbers).join("");
        return Array.from(numbers);
    }

    function assignRandomNumbersToCheckboxes(passwordNumbers) {
        const checkboxIds = ['first-checkbox', 'second-checkbox', 'third-checkbox'];
        checkboxIds.forEach((id, index) => {
            const label = document.getElementById(id);
            const checkbox = label.querySelector('input');
            const number = passwordNumbers[index];
            checkbox.value = number;
            label.innerHTML = `<input type='checkbox' value='${number}'> <span>${number}</span>`;
        });
    };

    function showGif() {
        const bigBoxesContainer = document.querySelector('.big-boxes');
        bigBoxesContainer.style.opacity = '0';
        setTimeout(() => {
            bigBoxesContainer.style.display = 'none';
    
            const gifContainer = document.createElement('div');
            gifContainer.className = 'gif-container';
            gifContainer.innerHTML = `
                <img src="../Pictures/unlocking-gif.gif" alt="Unlocking GIF" />
            `;
            document.body.appendChild(gifContainer);
    
            const gifImage = gifContainer.querySelector('img');
            console.log('GIF loaded:', gifImage);
            gifImage.addEventListener('click', () => {
                window.location.href = '../Page2-Folder/page2.html';
            });
        }, 1000);
    }

    function setupCheckboxClickLogic() {
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            const checkbox = label.querySelector('input');
            checkbox.addEventListener('click', () => {
                const value = checkbox.value;
                const position = password.indexOf(value);
                if (position !== -1) {
                    const box = document.getElementById(bigBoxIds[position]);
                    box.textContent = value;
                    label.style.display = 'none';
                    completedBoxes++;
                    if (completedBoxes === 3) {
                        showGif();
                    }
                }
            });
        });
    }

    const passwordNumbers = generatePassword();
    assignRandomNumbersToCheckboxes(passwordNumbers);
    setupCheckboxClickLogic();
};
