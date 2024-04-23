document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.business-form form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);
        const businessName = formData.get('business-name');
        const businessCategory = formData.get('business-catagory');
        const businessLocation = formData.get('business-city');
        const businessDescription = formData.get('business-description');
        const businessProfileImage = formData.get('business-profile');

        const profileHTML = `
            <img src="${businessProfileImage}" alt="Business Profile Image" class="profile-image">
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Business Category:</strong> ${businessCategory}</p>
            <p><strong>Business Location:</strong> ${businessLocation}</p>
            <p><strong>Business Description:</strong> ${businessDescription}</p>

        `;

        const profileDetails = {
            businessProfileImage: businessProfileImage,
            businessName: businessName,
            businessCategory: businessCategory,
            businessLocation: businessLocation,
            businessDescription: businessDescription
        };
        localStorage.setItem(businessName, JSON.stringify(profileDetails));

        confirmationMessage.style.display = 'block';
  
        window.location.href = `profile.html?business=${encodeURIComponent(businessName)}`;
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    const businessName = queryParams.get('business');

    if (businessName) {
        
        const profileDetails = JSON.parse(localStorage.getItem(businessName));
        
        if (profileDetails) {
            displayProfileDetails(profileDetails);
        }
    }
});

function displayProfileDetails(profileDetails) {
    const profileDetailsContainer = document.getElementById('profile-details');

    const profileHTML = `
        <img src="${profileDetails.businessProfileImage}" alt="Business Profile Image" class="profile-image">
        <p><strong>Business Name:</strong> ${profileDetails.businessName}</p>
        <p><strong>Business Category:</strong> ${profileDetails.businessCategory}</p>
        <p><strong>Business Location:</strong> ${profileDetails.businessLocation}</p>
        <p><strong>Business Description:</strong> ${profileDetails.businessDescription}</p>
    `;

    profileDetailsContainer.innerHTML = profileHTML;
}



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.business-form form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);
        const businessName = formData.get('business-name');
        const businessCategory = formData.get('business-catagory');
        const businessLocation = formData.get('business-city');
        const businessDescription = formData.get('business-description');
        const businessProfileImage = formData.get('business-profile');

        
        if (businessProfileImage) {
            
            const reader = new FileReader();

           
            reader.onload = function() {
                const profileImageDataURL = reader.result;

                const profileHTML = `
                    <img src="${profileImageDataURL}" alt="Business Profile Image" class="profile-image">
                    <p><strong>Business Name:</strong> ${businessName}</p>
                    <p><strong>Business Category:</strong> ${businessCategory}</p>
                    <p><strong>Business Location:</strong> ${businessLocation}</p>
                    <p><strong>Business Description:</strong> ${businessDescription}</p>
                `;

                const profileDetails = {
                    businessProfileImage: profileImageDataURL,
                    businessName: businessName,
                    businessCategory: businessCategory,
                    businessLocation: businessLocation,
                    businessDescription: businessDescription
                };
                localStorage.setItem(businessName, JSON.stringify(profileDetails));

                confirmationMessage.style.display = 'block';

                window.location.href = `profile.html?business=${encodeURIComponent(businessName)}`;
            };

            reader.readAsDataURL(businessProfileImage);
        } 
        else {
           
            console.error('No file selected.');
        }
    });
});
