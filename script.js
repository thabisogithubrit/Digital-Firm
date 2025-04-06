var currentUser = '';
var currentDashboard = '';
var contentDiv = null;
var partners = [];

// Login function
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("loginAs").value;
    
    document.querySelector(".login-container").style.display = "none";

    // Hide all dashboards
    document.getElementById("strategicDashboard").style.display = "none";
    document.getElementById("tacticalDashboard").style.display = "none";
    document.getElementById("operationalDashboard").style.display = "none";

    if (role === "strategic") {
        document.getElementById("strategicDashboard").style.display = "block";
        currentUser = "strategic";
        currentDashboard = "strategicDashboard";
        contentDiv = document.getElementById("strategicContent");
    } else if (role === "tactical") {
        document.getElementById("tacticalDashboard").style.display = "block";
        currentUser = "tactical";
        currentDashboard = "tacticalDashboard";
        contentDiv = document.getElementById("tacticalContent");
    } else if (role === "operational") {
        document.getElementById("operationalDashboard").style.display = "block";
        currentUser = "operational";
        currentDashboard = "operationalDashboard";
        contentDiv = document.getElementById("operationalContent");
    }
}

// Logout function
function logout() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    currentUser = '';
    currentDashboard = '';
    contentDiv = null;
    document.getElementById("strategicDashboard").style.display = "none";
    document.getElementById("tacticalDashboard").style.display = "none";
    document.getElementById("operationalDashboard").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
}

// Show content function
function showContent(action) {
    if (!contentDiv) return;
    contentDiv.innerHTML = '';

    if (action === "businessModel") {
      contentDiv.innerHTML = `<h3>Business Model</h3>
          <h4>Service Type</h4>
          <select id="serviceType">
              <option value="Prepaid">Prepaid</option>
              <option value="Postpaid">Postpaid</option>
          </select>
          <button onclick="selectService()">Choose Service</button>

          <h4>Subscription Plans</h4>
          <select id="subscriptionPlan">
              <option value="Unlimited">Unlimited</option>
              <option value="Limited">Limited</option>
          </select>
          <button onclick="subscribePlan()">Subscribe</button>

          <h4>Device Financing</h4>
          <input type="text" id="deviceName" placeholder="Device Name">
          <input type="number" id="installments" placeholder="Installments">
          <button onclick="financeDevice()">Finance Device</button>

          <h4>Value-Added Services</h4>
          <button onclick="startVoipCall()">Start VoIP Call</button>
          <button onclick="activateESIM()">Activate eSIM</button>
          <button onclick="streamService()">Access Streaming Service</button>
      `;
    }
      else if (action === "investments") {
        contentDiv.innerHTML = `<h3>Investment Decisions</h3>
            <h4>Select Investment Area</h4>
            <select id="investmentArea">
                <option value="5G">5G Infrastructure</option>
                <option value="Fiber Optics">Fiber Optics Expansion</option>
                <option value="AI Integration">AI-Powered Telecom Services</option>
                <option value="Cloud Solutions">Cloud-Based Networking</option>
            </select>
            <button onclick="selectInvestment()">Choose Investment</button>

            <h4>Budget Allocation</h4>
            <input type="number" id="investmentAmount" placeholder="Enter Investment Amount">
            <button onclick="allocateBudget()">Allocate Budget</button>

            <h4>Risk Assessment</h4>
            <button onclick="assessRisk()">Evaluate Risk</button>

            <h4>ROI Estimation</h4>
            <button onclick="estimateROI()">Estimate Returns</button>
        `;
    }
      else if (action === "partnerships") {
        contentDiv.innerHTML = `<h3>Manage Partnerships</h3>
            <input type="text" id="partnerName" placeholder="Partner Name">
            <select id="partnerType">
                <option value="Manufacturer">Manufacturer</option>
                <option value="Internet Provider">Internet Provider</option>
                <option value="Fintech">Fintech</option>
            </select>
            <button onclick="addPartner()">Add Partner</button>
            <div id="partnerList"></div>`;
        displayPartners();


    } else if (action === "fileSharing") {
        contentDiv.innerHTML = `<h3>File Sharing</h3>
            <input type="file" id="fileInput">
            <button onclick="shareFile()">Upload</button>`;



    } else if (action === "voip") {
        contentDiv.innerHTML = `<h3>VoIP Calls</h3>
            <input type="text" id="callNumber" placeholder="Enter Number">
            <button onclick="initiateVoipCall()">Call</button>`;


    } else if (action === "videoConferencing") {
        contentDiv.innerHTML = `<h3>Video Conferencing</h3>
            <button onclick="startVideoConference()">Start Conference</button>`;


    } else if (action === "instantMessaging") {
        contentDiv.innerHTML = `<h3>Instant Messaging</h3>
            <div id="chatWindow" style="border:1px solid #ccc; height:300px; overflow-y:scroll; padding:10px; background-color: white;">
            </div>
            <input type="text" id="chatMessage" placeholder="Type your message">
            <button onclick="sendMessage()">Send</button>`;



    } else if (action === "billingPayments") {
      contentDiv.innerHTML = `<h3>Billing & Payments</h3>
      <input type="text" id="partnerNamePayment" placeholder="Partner Name">
      <input type="number" id="paymentAmount" placeholder="Amount">
      <button onclick="processPayment()">Process Payment</button>
      <h4>Processed Payments</h4>
      <table border="1" id="paymentTable">
          <tr>
              <th>Partner Name</th>
              <th>Amount ($)</th>
              <th>Date</th>
          </tr>
      </table>`

    } else if (action === "productDevelopment") {
      contentDiv.innerHTML = `<h3>Product Development</h3>
          <p>Design new mobile and internet plans.</p>
          <input type="text" id="planName" placeholder="Plan Name">
          <input type="number" id="planPrice" placeholder="Price ($)">
          <select id="planType">
              <option value="Mobile">Mobile</option>
              <option value="Internet">Internet</option>
          </select>
          <button onclick="createProduct()">Create Plan</button>
          <div id="productList"></div>`;

  } else if (action === "marketingStrategies") {
    contentDiv.innerHTML = `<h3>Marketing Strategies</h3>
        <p>Develop customer acquisition campaigns and loyalty programs.</p>
        <input type="text" id="campaignName" placeholder="Campaign Name">
        <select id="campaignType">
            <option value="Social Media">Social Media</option>
            <option value="Email">Email</option>
            <option value="Referral">Referral Program</option>
        </select>
        <button onclick="createCampaign()">Launch Campaign</button>
        <div id="campaignList"></div>`;
} else if (action === "networkOperations") {
      contentDiv.innerHTML = `<h3>Network & IT Operations</h3>
          <p>Monitor infrastructure and implement cybersecurity protocols.</p>
          <button onclick="checkNetworkStatus()">Check Network Health</button>
          <button onclick="runSecurityCheck()">Run Security Scan</button>
          <div id="networkStatus"></div>`;
    }
     else {
        contentDiv.innerHTML = `<p>Content not recognized.</p>`;
    }
}

// Partnership Management
function addPartner() {
    var name = document.getElementById("partnerName").value;
    var type = document.getElementById("partnerType").value;
    if (name && type) {
        partners.push({ name, type });
        displayPartners();
    } else {
        alert("Enter partner details.");
    }
}

function displayPartners() {
    var partnerList = document.getElementById("partnerList");
    partnerList.innerHTML = "<h4>Partner List</h4>";
    partners.forEach((partner, index) => {
        partnerList.innerHTML += `<p>${index + 1}. ${partner.name} (${partner.type})</p>`;
    });
}

// File Sharing
function shareFile() {
    var file = document.getElementById('fileInput').files[0];
    if (file) {
        alert(`Sharing file: ${file.name}`);
    } else {
        alert("Select a file to share.");
    }
}

// VoIP Calls
function initiateVoipCall() {
    var number = document.getElementById('callNumber').value;
    if (number) {
        alert(`Calling ${number} via VoIP...`);
    } else {
        alert("Enter a number to call.");
    }
}

// Video Conferencing
function startVideoConference() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(function (stream) {
          // Create a responsive container
          var videoContainer = document.createElement("div");
          videoContainer.style.display = "flex";
          videoContainer.style.width = "100%";
          videoContainer.style.height = "100vh"; // Adjust based on viewport
          //videoContainer.style.gap = "10px"; // Adds spacing between elements
          document.body.appendChild(videoContainer);

          // Create iframe for self-view (flex-grow allows auto-resizing)
          var selfViewFrame = document.createElement("iframe");
          selfViewFrame.style.flexGrow = "1";
          selfViewFrame.style.height = "100%";
          selfViewFrame.style.border = "1px solid black";
          videoContainer.appendChild(selfViewFrame);

          // Inject video element into self-view iframe
          var selfDoc = selfViewFrame.contentDocument || selfViewFrame.contentWindow.document;
          var videoElement = selfDoc.createElement("video");
          videoElement.srcObject = stream;
          videoElement.autoplay = true;
          videoElement.style.width = "100%";
          videoElement.style.height = "100%";
          selfDoc.body.style.margin = "0"; // Removes default iframe margins
          selfDoc.body.style.overflow = "hidden";
          selfDoc.body.appendChild(videoElement);

          alert("Video conference started! Your camera and microphone are now active.");
      })
      .catch(function (error) {
          alert("Error accessing camera/microphone: " + error.message);
      });

  alert("Starting video conference...");
}


// Instant Messaging
function sendMessage() {
    var message = document.getElementById('chatMessage').value;
    if (message) {
        var chatWindow = document.getElementById('chatWindow');
        var newMessage = document.createElement('p');
        newMessage.textContent = 'You: ' + message;
        chatWindow.appendChild(newMessage);
        document.getElementById('chatMessage').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    } else {
        alert("Please type a message.");
    }
}

// Fintech Payment Processing
function processPayment() {
    var partnerName = document.getElementById('partnerNamePayment').value;
    var amount = document.getElementById('paymentAmount').value;
    if (partnerName && amount) {
        alert(`Processing payment of ${amount} for ${partnerName}`);
    } else {
        alert("Enter payment details.");
    }
}



// Functionality Implementations
function selectService() {
  var service = document.getElementById("serviceType").value;
  alert("You have selected " + service + " service.");
}

function subscribePlan() {
  var plan = document.getElementById("subscriptionPlan").value;
  alert("You have subscribed to the " + plan + " plan.");
}

function financeDevice() {
  var device = document.getElementById("deviceName").value;
  var installments = document.getElementById("installments").value;
  if (device && installments) {
      alert("Financing " + device + " in " + installments + " installments.");
  } else {
      alert("Please provide device name and installment count.");
  }
}

// Global peer connection variable
var peerConnection;
var signalingServer; // You need WebSockets or a signaling service

function startVoipCall() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            alert("VoIP call started! Your microphone is now active.");

            // Create WebRTC peer connection
            peerConnection = new RTCPeerConnection();
            peerConnection.addTrack(stream.getAudioTracks()[0], stream);

            // Connect to signaling server (this must be implemented separately)
            initiateSignaling(peerConnection);

        })
        .catch(function (error) {
            alert("Error accessing microphone: " + error.message);
        });
}

// Establish peer-to-peer communication using signaling
function initiateSignaling(peerConnection) {
    alert("Connecting to VoIP call...");

    // Example placeholder for signaling server logic
    // You must implement WebSockets or a VoIP provider's signaling service

    peerConnection.createOffer()
        .then((offer) => {
            peerConnection.setLocalDescription(offer);
            // Send `offer` to remote peer via signaling server
        })
        .catch((error) => {
            alert("Error creating call offer: " + error.message);
        });

    peerConnection.ontrack = (event) => {
        var audioElement = document.createElement("audio");
        audioElement.srcObject = event.streams[0];
        audioElement.autoplay = true;
        document.body.appendChild(audioElement);
    };
}


function activateESIM() {
  var esimActivationURL = "https://carrier-api.com/activate-esim"; // Replace with carrier's API
  var esimData = {
      userId: "USER_ID", // Replace with dynamic user ID
      deviceId: "DEVICE_ID", // Replace with actual device ID
      profileType: "eSIM"
  };

  fetch(esimActivationURL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(esimData)
  })
  .then(response => response.json())
  .then(data => {
      alert("eSIM activated successfully!");
  })
  .catch(error => {
      alert("Failed to activate eSIM: " + error.message);
  });
}


function streamService() {
  var streamingURL = "https://example-streaming.com/play"; // Replace with actual streaming API
  
  var videoFrame = document.createElement("iframe");
  videoFrame.src = streamingURL;
  videoFrame.style.width = "100%";
  videoFrame.style.height = "500px";
  videoFrame.allowFullscreen = true;
  
  document.body.appendChild(videoFrame);
  
  alert("Streaming service accessed!");
}

// Investment Decisions Implementation
function selectInvestment() {
  var investment = document.getElementById("investmentArea").value;
  alert("You have selected investment in: " + investment);
}

function allocateBudget() {
  var amount = document.getElementById("investmentAmount").value;
  if (amount) {
      alert("You have allocated $" + amount + " for investment.");
  } else {
      alert("Please enter an investment amount.");
  }
}

function assessRisk() {
  var riskLevel = Math.random() > 0.5 ? "High Risk" : "Low Risk";
  alert("Risk Assessment Result: " + riskLevel);
}

function estimateROI() {
  var roi = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
  alert("Estimated ROI: " + roi + "% over 5 years.");
}


function createProduct() {
  var planName = document.getElementById("planName").value;
  var planPrice = document.getElementById("planPrice").value;
  var planType = document.getElementById("planType").value;

  if (planName && planPrice && planType) {
      document.getElementById("productList").innerHTML += `<p>${planName} - ${planType} ($${planPrice})</p>`;
      alert("Product created successfully!");
  } else {
      alert("Fill in all fields!");
  }
}

function createCampaign() {
  var campaignName = document.getElementById("campaignName").value;
  var campaignType = document.getElementById("campaignType").value;

  if (campaignName && campaignType) {
      document.getElementById("campaignList").innerHTML += `<p>${campaignName} - ${campaignType}</p>`;
  } else {
      alert("Provide all campaign details!");
  }
}

function checkNetworkStatus() {
  var status = Math.random() > 0.5 ? "Network is stable ✅" : "Network instability detected ⚠️";
  document.getElementById("networkStatus").innerHTML = `<p>${status}</p>`;
}

function runSecurityCheck() {
  var securityRisk = Math.random() > 0.7 ? "Security threats detected! 🔴" : "No security risks found ✅";
  alert(securityRisk);
}

function processPayment() {
  var partnerName = document.getElementById("partnerNamePayment").value;
  var amount = document.getElementById("paymentAmount").value;

  if (partnerName && amount) {
      var paymentDate = new Date().toLocaleString(); // Capture transaction date
      payments.push({ partnerName, amount, paymentDate });

      updatePaymentTable(); // Update table with new entry
      alert("Payment processed successfully!");
  } else {
      alert("Please enter both partner name and amount.");
  }
}

function updatePaymentTable() {
  var table = document.getElementById("paymentTable");
  
  // Clear previous rows (except header)
  table.innerHTML = `<tr>
      <th>Partner Name</th>
      <th>Amount ($)</th>
      <th>Date</th>
  </tr>`;

  // Add all stored payments
  payments.forEach(payment => {
      var row = table.insertRow();
      row.insertCell(0).textContent = payment.partnerName;
      row.insertCell(1).textContent = payment.amount;
      row.insertCell(2).textContent = payment.paymentDate;
  });
}
