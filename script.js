const form = document.querySelector('form');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');


form.addEventListener('submit', (e) => {
    const data = {
        name: input1.value,
        phone: input2.value
    }
    e.preventDefault();
    fetch('http://localhost:3000/api/server',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(data)
    form.reset();
})

