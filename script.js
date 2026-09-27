/* =========================================
   TALANOA MARKET PROTOTYPE
========================================= */


/* =========================================
   START
========================================= */

function goToGateway() {

    document
        .getElementById("gateway")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   SELECT DIGICEL / TCC
========================================= */

function selectNetwork(network) {

    const gateway =
        document.getElementById("gateway");

    const connection =
        document.getElementById("connection");

    const callSection =
        document.getElementById("callSection");

    const networkName =
        document.getElementById("networkName");

    const loadingBar =
        document.getElementById("loadingBar");

    const status =
        document.getElementById("connectionStatus");


    /* Show network name */

    networkName.textContent =
        network + " NETWORK";


    /* Hide gateway */

    gateway.style.display = "none";


    /* Show connection */

    connection.style.display = "block";


    connection.scrollIntoView({
        behavior: "smooth"
    });


    /* Animate loading */

    setTimeout(function() {

        loadingBar.style.width = "35%";

        status.textContent =
            "Connecting to mobile service...";

    }, 200);


    setTimeout(function() {

        loadingBar.style.width = "70%";

        status.textContent =
            "Talanoa Market service found...";

    }, 1200);


    setTimeout(function() {

        loadingBar.style.width = "100%";

        status.textContent =
            "✓ Connected to Talanoa Market";

    }, 2200);


    /* Show call */

    setTimeout(function() {

        connection.style.display = "none";

        callSection.style.display = "block";

        callSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 3200);

}


/* =========================================
   ANSWER CALL
========================================= */

function answerCall() {

    const call =
        document.getElementById("callSection");

    const talanoa =
        document.getElementById("talanoa");


    call.style.display = "none";

    talanoa.style.display = "block";


    talanoa.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   TONGAN VOICE DEMO
========================================= */

function startListening() {

    const button =
        document.getElementById("voiceButton");

    const status =
        document.getElementById("voiceStatus");


    button.disabled = true;

    button.textContent =
        "🔴 FANONGO...";


    status.textContent =
        "ʻOku fanongo ʻa e AI...";


    setTimeout(function() {

        status.textContent =
            "ʻOku mahino ʻa e leá...";

    }, 1800);


    setTimeout(function() {

        status.textContent =
            "✓ Kuo mahino ʻa e talanoá!";

        button.disabled = false;

        button.textContent =
            "🎙️ TALANOA FOʻOU";

    }, 3500);

}


/* =========================================
   SHOW FORM
========================================= */

function showVendorForm() {

    const talanoa =
        document.getElementById("talanoa");

    const form =
        document.getElementById("vendorForm");


    talanoa.style.display = "none";

    form.style.display = "block";


    form.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   CREATE AD
========================================= */

function createAdvertisement() {

    const product =
        document.getElementById("product").value.trim();

    const location =
        document.getElementById("location").value.trim();

    const price =
        document.getElementById("price").value.trim();

    const contact =
        document.getElementById("contact").value.trim();


    if (
        product === "" ||
        location === "" ||
        price === "" ||
        contact === ""
    ) {

        alert(
            "Kataki fakafonu ʻa e ngaahi meʻa kotoa."
        );

        return;

    }


    /* Hide form */

    document.getElementById("vendorForm")
        .style.display = "none";


    /* Show AI */

    const processing =
        document.getElementById("processing");


    processing.style.display = "block";


    processing.scrollIntoView({
        behavior: "smooth"
    });


    /* Simulate AI */

    setTimeout(function() {

        processing.style.display = "none";


        document.getElementById("adTitle")
            .textContent = product;


        document.getElementById("adDescription")
    .textContent =

    "Discover this authentic Tongan product from " +

    location +

    ". Connect directly with the local vendor and " +

    "experience a genuine product from the community.";


        document.getElementById("adLocation")
            .textContent = location;


        document.getElementById("adPrice")
            .textContent = price;


        document.getElementById("adContact")
            .textContent = contact;


        const advertisement =
            document.getElementById("advertisement");


        advertisement.style.display = "block";


        advertisement.scrollIntoView({
            behavior: "smooth"
        });


    }, 3000);

}


/* =========================================
   PUBLISH TO TOURISTS
========================================= */

function publishAdvertisement() {

    const title =
        document.getElementById("adTitle")
            .textContent;

    const description =
        document.getElementById("adDescription")
            .textContent;

    const location =
        document.getElementById("adLocation")
            .textContent;

    const price =
        document.getElementById("adPrice")
            .textContent;


    /* Send information */

    document.getElementById("touristTitle")
        .textContent = title;


    document.getElementById("touristDescription")
        .textContent = description;


    document.getElementById("touristLocation")
        .textContent = location;


    document.getElementById("touristPrice")
        .textContent = price;


    /* Show tourist page */

    const tourist =
        document.getElementById("tourist");


    tourist.scrollIntoView({
        behavior: "smooth"
    });

}
