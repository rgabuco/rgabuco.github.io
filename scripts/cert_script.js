const certImageDisplay = document.getElementById('cert-img');
const certSourceLink = document.getElementById('view-source-btn');

function showCertificate(cert) {

    switch (cert) {
        case 'cert-solo-html':
            updateCertDisplay('cert-solo-html.png', 'Sololearn Introduction to HTML Certificate', 'https://www.sololearn.com/certificates/CC-YZPXPJRY');
            break;
        case 'cert-solo-css':
            updateCertDisplay('cert-solo-css.png', 'Sololearn Introduction to CSS Certificate', 'https://www.sololearn.com/certificates/CC-6GOWSPYK');
            break;
        case 'cert-solo-js':
            updateCertDisplay('cert-solo-js.png', 'Sololearn Introduction to JavaScript Certificate', 'https://www.sololearn.com/certificates/CC-SVFGIDSE');
            break;
        case 'cert-solo-sql':
            updateCertDisplay('cert-solo-sql.jpg', 'Sololearn Introduction to SQL Certificate', 'https://www.sololearn.com/en/certificates/CC-SHGLKAS7');
            break;
        case 'cert-solo-sqlIntr':
            updateCertDisplay('cert-solo-sqlIntr.jpg', 'Sololearn SQL Intermediate Certificate', 'https://www.sololearn.com/en/certificates/CC-BR557AGO');
            break;
        case 'cert-solo-csharp':
            updateCertDisplay('cert-solo-csharp.jpg', 'Sololearn Introduction to C# Certificate', 'https://www.sololearn.com/en/certificates/CC-NY4WTR0O');
            break;
        case 'cert-solo-cpp':
            updateCertDisplay('cert-solo-cpp.png', 'Sololearn C++ Intermediate Certificate', 'https://www.sololearn.com/certificates/CC-XISN80TV');
            break;      
        case 'cert-udemy-py':
            updateCertDisplay('cert-udemy-py.jpg', 'Udemy Python Masterclass Certificate', 'https://www.udemy.com/certificate/UC-L343SNK0/');
            break; 
        case 'cert-udemy-shell':
            updateCertDisplay('cert-udemy-shell.jpg', 'Udemy Linux Shell Scripting Certificate', 'https://www.udemy.com/certificate/UC-DSMEMHRN/');
            break; 
        case 'cert-udemy-arduino':
            updateCertDisplay('cert-udemy-arduino.jpg', 'Udemy Arduino Workshop Certificate', 'https://www.udemy.com/certificate/UC-5754a128-5116-4ebb-aa94-400c5bde3028/');
            break;
        case 'cert-linkedin-cpp':
            updateCertDisplay('cert-linkedin-cpp.jpeg', 'Linkedin Learning C++ Essentials Certificate', 'https://www.linkedin.com/learning/certificates/08789699f9389a531a9b03f5d65c7107957318e4a10d13aec8fad088a5522573?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJRpsOQRpTB6qxWEMmFh1NA%3D%3D');
            break;
        case 'cert-linkedin-prog':
            updateCertDisplay('cert-linkedin-prog.jpeg', 'LinkedIn Learning Programming Foundations Certificate', 'https://www.linkedin.com/learning/certificates/99ec7f1c17adcc3ab6ba4c12e7758b970fe2e47f5b4bad988226216192a30ca3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJRpsOQRpTB6qxWEMmFh1NA%3D%3D');
            break;
        case 'cert-linkedin-oop':
            updateCertDisplay('cert-linkedin-oop.jpeg', 'LinkedIn Learning Object Oriented Design Certificate', 'https://www.linkedin.com/learning/certificates/bc2f777f4389ff267311c85db23aa0600bebe21a9a95db9b4684bf71c63ec1f2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJRpsOQRpTB6qxWEMmFh1NA%3D%3D');
            break;
        case 'cert-linkedin-py':
            updateCertDisplay('cert-linkedin-py.jpeg', 'LinkedIn Learning Python for Non-Programmers Certificate', 'https://www.linkedin.com/learning/certificates/4f70100e13f2b3edf8ce4eb33058002819f604ce274e680ed29cea749645f4eb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJRpsOQRpTB6qxWEMmFh1NA%3D%3D');
            break;        
        default:
            certImageDisplay.innerHTML = 'Certificate not found';
    }
}

function updateCertDisplay(file, desc, url){
    updateCertImageDisplay(file, desc);
    updateViewSourceBtnUrl(url);
}

function updateCertImageDisplay(file, desc){
    // Update the src attribute
    certImageDisplay.setAttribute("src", `../assets/${file}`);
    // Update the alt attribute
    certImageDisplay.setAttribute("alt", `${desc}`);
}

function updateViewSourceBtnUrl(url){
    // Update the onclick attribute
    certSourceLink.setAttribute("onclick", `window.open('${url}', '_blank')`);
}
