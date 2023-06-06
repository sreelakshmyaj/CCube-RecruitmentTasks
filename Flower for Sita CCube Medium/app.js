//gallery.html
function show(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'flex';
}

function hide(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'none';
    
}

//api

const apiKey = 'J3lx7e5jIenizcj3pGBl49vSgP5FWYI4Ey5oqaRGeQmvRGBHPF';
const imgInput = document.getElementById("img-input");
const imgOutput = document.getElementById("img-output");
const resultELement = document.getElementById("result");

imgInput.addEventListener('change', function() {
    console.log("working");
    const file = imgInput.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function() {
            imgOutput.src = reader.result;
        };
        reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append('images', file);

    fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
        'Api-Key': apiKey,
        },
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
        if (data.suggestions.length > 0) {
            const plantName = data.suggestions[0].plant_name;
            const probability = data.suggestions[0].probability;
            const commonNames = data.suggestions[0].plant_details.common_names;

            console.log(commonNames);
            const plantNameOut = document.querySelector(".name");
            const probOut = document.querySelector(".prob");
            const deetsOut = document.querySelector(".deets");

            plantNameOut.textContent = plantName;
            probOut.textContent = probability;
            deetsOut.textContent = commonNames;
        } else {
            resultELement.textContent = 'Plant not found.';
        }
        })
        .catch(error => {
        console.error('Plant identification failed:', error);
        });

    })


