const Button = document.querySelectorAll('button')
const Svgs = document.querySelectorAll('.svgs')
const image = document.getElementById('cover')
const mage = document.getElementById('mage')
const svg_mage = document.getElementById('svg_mage')

const UploadCover = document.getElementById('upload2')
const Uploadimage = document.getElementById('upload1')
const UploadimageLabel = document.getElementById('label1')
const UploadLabel = document.getElementById('uploadLabel')


Button.forEach((eachBtn) => {
    eachBtn.addEventListener('click', function () {
        if (eachBtn.classList.contains('active-btn')) {
            eachBtn.classList.remove('active-btn')
        } else {
            eachBtn.classList.add('active-btn')

        }
    })
})

Svgs.forEach((svg) => {
    svg.addEventListener('click', function () {
        if (svg.classList.contains('active-svg')) {
            svg.classList.remove('active-svg')
        } else {
            svg.classList.add('active-svg')

        }
    })
})

// image Uploading for cover photo

UploadCover.addEventListener('change', function (e) {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
        const readFile = new FileReader();
        readFile.onload = (e) => {
            image.src = e.target.result;
            UploadLabel.style.display = 'none';
            image.style.display = 'block';
            UploadimageLabel.disabled = false
            UploadimageLabel.classList.remove('disabled')
            mage.classList.remove('hidden')
            svg_mage.classList.remove('hidden')
            mage.src = e.target.result

        }
        readFile.readAsDataURL(file);
    } else {
        UploadimageLabel.disabled = true
        UploadimageLabel.classList.add('disabled')
    }
})


// image Uploading for images photo

Uploadimage.addEventListener('change', (e) => {
    const files = e.target.files;
    Array.from(files).map((eachFile) => {
        if (eachFile) {
            const readEachFile = new FileReader();
            readEachFile.onload = (e) => {
                const html = ` <div class="subs">
                <img src=${e.target.result} onclick="displayEachimage('${e.target.result}')" />
                    <div class="svg_mage" onclick="removeImage(this)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        
                      >
                        <path
                          fill="currentColor"
                          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                        />
                      </svg>
                    </div>
                  </div>
                `
                console.log(html)
                mage.insertAdjacentHTML("afterend", html)

            }
            readEachFile.readAsDataURL(eachFile)

        }
    })

})

function displayEachimage(clickedImage) {
    image.src = clickedImage
}
function removeImage(svgElement) {
    const parentDiv = svgElement.parentElement;
    parentDiv.remove();
}

