// Initialize AOS
AOS.init({
    duration: 1000,
    delay: 200
});

let selectedPet = "";
const phoneNumber = "9034631381";

function openPopup(element) {
    selectedPet = element.getAttribute('data-name');
    const petAge = element.getAttribute('data-age');
    const petReason = element.getAttribute('data-reason');
    const petNote = element.getAttribute('data-note');
    const petImage = element.getAttribute('data-image');

    document.getElementById("petNameTitle").innerText = selectedPet;
    document.getElementById("petAge").innerText = petAge;
    document.getElementById("petReason").innerText = petReason;
    document.getElementById("petNote").innerText = petNote;
    document.getElementById("petNameConfirm").innerText = selectedPet;
    document.getElementById("popupImage").src = petImage;

    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("adoptPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("adoptPopup").style.display = "none";
}

function confirmAdoption() {
    const message = `Hello, I want to adopt ${selectedPet}. Can you provide more details?`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}

function updatePetImage() {
    const petImage = document.getElementById("pet-img");
    const species = document.getElementById("species").value;

    const images = {
        dog: "https://t3.ftcdn.net/jpg/00/72/47/66/360_F_72476668_031nbehb2YSPt2fvSKZm6yP3rwyGGwr6.jpg",
        cat: "https://t4.ftcdn.net/jpg/00/85/95/79/360_F_85957993_x6BN46mxasrRye2mp5rXFVrjAUE5LWF8.jpg",
        rabbit: "https://media.istockphoto.com/id/1297963192/photo/close-up-of-cute-baby-rabbit.jpg?s=612x612&w=0&k=20&c=TuRZKZXZ9ejOWf_IRu2uSdHPzdzqnv3eTw_N6OQ7sQ8="
    };

    petImage.style.opacity = "0";
    setTimeout(() => {
        petImage.src = images[species];
        petImage.style.opacity = "1";
    }, 300);
}

function redirectToWhatsApp() {
    const species = document.getElementById("species").value;
    const message = `Hello, I am interested in adopting a ${species}. Can you provide more details?`;
    const whatsappURL = `https://wa.me/${9034631381}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}