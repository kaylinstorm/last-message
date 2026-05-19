const gameData = {
    passcode: '1234',
    clueCount: 0,
    cluesFound: [],
    currentScreen: 'lockScreen',
    musicMuted: false,
    audioContext: null,
    bgMusicGain: null,
    messages: [
        {
            id: 'alex',
            name: 'Alex Chen',
            preview: 'Olivia was scared after talking to Taylor.',
            lastSeen: '11:05 PM',
            messages: [
                { sender: 'received', text: 'Olivia called me crying. She said Taylor was threatening to ruin her.' },
                { sender: 'sent', text: 'Did she say why? Who is Taylor?' },
                { sender: 'received', text: 'She said he knows what she saw and he wants her quiet. I told her to be careful.' }
            ],
            clue: { id: 'alexTaylor', text: 'Olivia told Alex Taylor was threatening her.' }
        },
        {
            id: 'jordan',
            name: 'Jordan Park',
            preview: 'Olivia mentioned a hidden camera and a warning.',
            lastSeen: 'Yesterday',
            messages: [
                { sender: 'received', text: 'Olivia said she found a hidden camera in the meeting room.' },
                { sender: 'sent', text: 'Who would do that? That sounds dangerous.' },
                { sender: 'received', text: 'She said someone asked her to keep the footage secret. She was scared.' }
            ],
            clue: { id: 'jordanPO', text: 'Olivia discovered a hidden camera and was too scared to tell everyone.' }
        },
        {
            id: 'casey',
            name: 'Casey Moore',
            preview: 'Olivia said someone wanted her out of the way.',
            lastSeen: 'Today',
            messages: [
                { sender: 'received', text: 'I heard Olivia telling someone: If I disappear, you will all know the truth.' },
                { sender: 'sent', text: 'What truth? Who are you talking about?' },
                { sender: 'received', text: 'She said she was starting to suspect Taylor and a meeting at the warehouse.' }
            ],
            clue: { id: 'caseyWire', text: 'Olivia suspected a warehouse meeting might be dangerous.' }
        },
        {
            id: 'taylor',
            name: 'Taylor Blake',
            preview: 'You don\'t understand. I was protecting us.',
            lastSeen: '2 minutes ago',
            messages: [
                { sender: 'sent', text: 'Taylor, this is serious. Did you hurt Olivia?' },
                { sender: 'received', text: 'You have no proof. Olivia knew too much and made a mistake.' },
                { sender: 'received', text: 'If you want the truth, check the notes about the warehouse and the password hint.' }
            ],
            clue: { id: 'taylorOffshore', text: 'Taylor says Olivia knew too much and points to a warehouse meeting.' }
        }
    ],
    photos: [
        { src: 'images/photo-memo.jpg', caption: 'A printed memo labeled "Warehouse Meeting" and a time stamp.', clue: { id: 'photoMemo', text: 'Olivia had notes about a secret warehouse meeting.' } },
        { src: 'images/photo-receipt.jpg', caption: 'A coffee receipt from a late-night document review.', clue: { id: 'photoReceipt', text: 'The receipt shows Olivia met someone late at night.' } },
        { src: 'images/photo-dashboard.jpg', caption: 'A screenshot of a files list with one item circled.', clue: { id: 'photoDashboard', text: 'Olivia marked a file she called the evidence file.' } },
        { src: 'images/photo-selfie.jpg', caption: 'A selfie of the phone owner at the office.', clue: null },
        { src: 'images/photo-coffee.jpg', caption: 'Morning coffee with a note that says "Trust no one."', clue: { id: 'photoCoffee', text: 'Olivia wrote a warning note reminding herself not to trust anyone.' } },
        { src: 'images/photo-map.jpg', caption: 'A map marker pinned near a private warehouse.', clue: { id: 'photoMap', text: 'The map shows the warehouse where Olivia had a secret meeting.' } }
    ],
    notes: [
        { date: 'May 16', text: 'Taylor asked me to meet at the back warehouse after hours. He said it was urgent.', clue: { id: 'noteReroute', text: 'Taylor arranged a secret after-hours meeting at the warehouse.' } },
        { date: 'May 17', text: 'I hid the evidence file in the presentation. Only a few people know where it is.', clue: { id: 'noteHiddenPO', text: 'Olivia hid evidence in a presentation file.' } },
        { date: 'May 18', text: 'Something feels wrong. I saw a photo with someone standing behind me in the hallway.', clue: { id: 'noteFakeConsulting', text: 'Olivia was being followed and felt unsafe.' } },
        { date: 'May 15', text: 'Lunch with Sarah. We talked about deadlines and a new contract.', clue: null }
    ],
    emails: [
        { from: 'security@hartgroup.com', subject: 'Urgent: Unapproved access reported', preview: 'A restricted file was opened after hours.', body: 'Security detected unauthorized access to the Olivia Hart evidence file on May 17 after 11 PM. The access was traced to a laptop assigned to Taylor Blake. Please escalate immediately.', clue: { id: 'emailTransfer', text: 'Security found unauthorized after-hours access to Olivia Hart\'s evidence file.' } },
        { from: 'mike@warehouse.net', subject: 'Warehouse meeting confirmed', preview: 'Meeting scheduled at the back warehouse for 10 PM.', body: 'The back warehouse is reserved for the meeting on May 16. Olivia Hart was confirmed to attend and review sensitive documents. Please do not disclose the location.', clue: { id: 'emailPO', text: 'Olivia confirmed a secret warehouse meeting on May 16.' } },
        { from: 'updates@newsletter.com', subject: 'Weekly team digest', preview: 'Tonight\'s meeting recap and next steps.', body: 'This week\'s highlights: Q2 project milestones met, budget review scheduled for Friday, and new partnership announcements coming soon. Team building event next month. Have a great week!', clue: null }
    ],
    contacts: [
        { name: 'Emma Fields', info: 'Last called 3 days ago' },
        { name: 'Nina Patel', info: 'Works in finance' },
        { name: 'Marcus Lee', info: 'Olivia\'s business partner' },
        { name: 'Sara Gomez', info: 'Project manager' },
        { name: 'Noah Chen', info: 'Emergency contact' }
    ],
    socialPosts: [
        { author: 'Taylor Blake', time: '1h ago', content: 'Olivia was asking too many questions. That could get messy.', likes: 120, comments: [
            { author: 'Jamie', text: 'What questions? Who is Olivia?' },
            { author: 'Aly', text: 'I hope everyone stays safe.' }
        ], clue: null },
        { author: 'Casey Moore', time: '4h ago', content: 'Proof is everything. Watch who you trust.', likes: 95, comments: [
            { author: 'Mia', text: 'That sounds suspicious.' },
            { author: 'Leo', text: 'Trust no one indeed.' }
        ], clue: { id: 'socialCasey', text: 'Casey warned that someone in Olivia\'s circle was dangerous.' } },
        { author: 'Jordan Park', time: 'Yesterday', content: 'Sad to see people lie to your face.', likes: 67, comments: [
            { author: 'Nina', text: 'We need the real story.' }
        ], clue: null },
        { author: 'Alex Chen', time: '2 days ago', content: 'If someone is hiding evidence, the truth will still come out.', likes: 154, comments: [
            { author: 'Sam', text: 'Numbers don\'t lie.' },
            { author: 'Rae', text: 'Follow the evidence trail.' }
        ], clue: { id: 'socialAlex', text: 'Alex says hidden evidence will expose the truth.' } }
    ],
    suspects: [
        { id: 'alex', name: 'Alex Chen', role: 'Best Friend', evidence: 'Olivia trusted him and told him Taylor was threatening her.' },
        { id: 'jordan', name: 'Jordan Park', role: 'Ex', evidence: 'Olivia had a tense history with Jordan and kept secrets from him.' },
        { id: 'casey', name: 'Casey Moore', role: 'Coworker', evidence: 'He overheard Olivia say she was being followed.' },
        { id: 'taylor', name: 'Taylor Blake', role: 'Business Partner', evidence: 'He organized the secret warehouse meeting and lied about it.' }
    ]
};

let guidanceTimer;

const elements = {
    passcodeInput: document.getElementById('passcodeInput'),
    unlockBtn: document.getElementById('unlockBtn'),
    passcodeError: document.getElementById('passcodeError'),
    clueCount: document.getElementById('clueCount'),
    messagesList: document.getElementById('messagesList'),
    contactsList: document.getElementById('contactsList'),
    notesList: document.getElementById('notesList'),
    galleryGrid: document.getElementById('galleryGrid'),
    socialFeed: document.getElementById('socialFeed'),
    emailsList: document.getElementById('emailsList'),
    suspectList: document.getElementById('suspectList'),
    contactName: document.getElementById('contactName'),
    conversation: document.getElementById('conversation'),
    resultTitle: document.getElementById('resultTitle'),
    resultText: document.getElementById('resultText'),
    helpBtn: document.getElementById('helpBtn'),
    helpOverlay: document.getElementById('helpOverlay'),
    closeHelpBtn: document.getElementById('closeHelpBtn'),
    introOverlay: document.getElementById('introOverlay'),
    closeIntroBtn: document.getElementById('closeIntroBtn'),
    statusTime: document.getElementById('statusTime'),
    lockTime: document.getElementById('lockTime'),
    lockDate: document.getElementById('lockDate'),
    guidancePopup: document.getElementById('guidancePopup'),
    noteDetailScreen: document.getElementById('noteDetailScreen'),
    noteDetailDate: document.getElementById('noteDetailDate'),
    noteDetailText: document.getElementById('noteDetailText'),
    emailDetailScreen: document.getElementById('emailDetailScreen'),
    emailDetailFrom: document.getElementById('emailDetailFrom'),
    emailDetailSubject: document.getElementById('emailDetailSubject'),
    emailDetailBody: document.getElementById('emailDetailBody'),
    contactDetailScreen: document.getElementById('contactDetailScreen'),
    contactDetailName: document.getElementById('contactDetailName'),
    contactDetailInfo: document.getElementById('contactDetailInfo'),
    musicToggleBtn: document.getElementById('musicToggleBtn'),
    unlockAudio: document.getElementById('unlockSound'),
    clueAudio: document.getElementById('clueSound'),
    successAudio: document.getElementById('successSound'),
    failAudio: document.getElementById('failSound')
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function openPhoneScreen(screenId) {
    document.querySelectorAll('.phone-screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    gameData.currentScreen = screenId;
}

function updateClueCount() {
    elements.clueCount.textContent = `Clues: ${gameData.clueCount}/12`;
}

function updateEvidencePanels() {
    document.querySelectorAll('[data-clue]').forEach(el => {
        const clueId = el.dataset.clue;
        if (gameData.cluesFound.includes(clueId)) {
            el.classList.remove('hidden-evidence');
        } else {
            el.classList.add('hidden-evidence');
        }
    });
}

function formatPhoneTime(date) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${displayHour}:${minutes}`;
}

function updatePhoneTime() {
    const now = new Date();
    const timeText = formatPhoneTime(now);
    if (elements.statusTime) elements.statusTime.textContent = timeText;
    if (elements.lockTime) elements.lockTime.textContent = timeText;
    if (elements.lockDate) {
        const dateText = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        elements.lockDate.textContent = dateText;
    }
}

function setupBackgroundMusic() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const gain = ctx.createGain();
    gain.gain.value = gameData.musicMuted ? 0 : 0.12;
    gain.connect(ctx.destination);

    const base = ctx.createOscillator();
    base.type = 'sine';
    base.frequency.value = 55;

    const mod = ctx.createOscillator();
    mod.type = 'triangle';
    mod.frequency.value = 0.22;

    const modGain = ctx.createGain();
    modGain.gain.value = 20;
    mod.connect(modGain);
    modGain.connect(base.frequency);

    base.connect(gain);
    base.start();
    mod.start();

    gameData.audioContext = ctx;
    gameData.bgMusicGain = gain;
}

function updateMusicButton() {
    if (!elements.musicToggleBtn) return;
    elements.musicToggleBtn.textContent = gameData.musicMuted ? '🔇' : '🎵';
    elements.musicToggleBtn.title = gameData.musicMuted ? 'Unmute music' : 'Mute music';
}

function ensureAudioContext() {
    if (gameData.audioContext && gameData.audioContext.state === 'suspended') {
        gameData.audioContext.resume().catch(() => {});
    }
}

function toggleMusic() {
    gameData.musicMuted = !gameData.musicMuted;
    if (gameData.bgMusicGain) {
        gameData.bgMusicGain.gain.value = gameData.musicMuted ? 0 : 0.12;
    }
    ensureAudioContext();
    updateMusicButton();
}

function unlockClue(clueId) {
    if (!clueId || gameData.cluesFound.includes(clueId)) return;
    gameData.cluesFound.push(clueId);
    gameData.clueCount = Math.min(12, gameData.clueCount + 1);
    updateClueCount();
    updateEvidencePanels();
    
    if (elements.clueAudio) {
        elements.clueAudio.currentTime = 0;
        elements.clueAudio.play().catch(err => console.log('Audio play failed:', err));
    }
    
    showGuidance(`Clue found! (${gameData.clueCount}/12)`);
}

function initialize() {
    showScreen('loadingScreen');
    updateClueCount();
    updateEvidencePanels();
    updatePhoneTime();
    setupBackgroundMusic();
    updateMusicButton();
    setInterval(updatePhoneTime, 30000);
    elements.unlockBtn.addEventListener('click', handleUnlock);
    elements.passcodeInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') handleUnlock();
    });

    elements.helpBtn.addEventListener('click', showHelpOverlay);
    elements.musicToggleBtn.addEventListener('click', toggleMusic);
    elements.closeHelpBtn.addEventListener('click', closeHelpOverlay);
    elements.closeIntroBtn.addEventListener('click', closeIntroOverlay);

    document.querySelectorAll('[data-app]').forEach(icon => {
        icon.addEventListener('click', () => openApp(icon.dataset.app));
    });

    document.getElementById('backBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backDetailBtn').addEventListener('click', () => openPhoneScreen('messagesScreen'));
    document.getElementById('backGalleryBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backPhotoBtn').addEventListener('click', () => openPhoneScreen('galleryScreen'));
    document.getElementById('backNotesBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backContactsBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backSocialBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backEmailBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backSuspectBtn').addEventListener('click', () => openPhoneScreen('homeScreen'));
    document.getElementById('backNoteDetailBtn').addEventListener('click', () => openPhoneScreen('notesScreen'));
    document.getElementById('backEmailDetailBtn').addEventListener('click', () => openPhoneScreen('emailScreen'));
    document.getElementById('backContactDetailBtn').addEventListener('click', () => openPhoneScreen('contactsScreen'));
    document.getElementById('playAgainBtn').addEventListener('click', resetGame);

    renderMessagesList();
    renderGallery();
    renderNotes();
    renderContacts();
    renderSocial();
    renderEmails();
    renderSuspects();

    const loadingFill = document.querySelector('.loading-fill');
    const loadingPercent = document.querySelector('.loading-percent');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        loadingFill.style.width = `${progress}%`;
        loadingPercent.textContent = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                showScreen('phoneScreen');
                openPhoneScreen('lockScreen');
                if (elements.introOverlay) {
                    elements.introOverlay.classList.add('active');
                }
            }, 400);
        }
    }, 100);
}

function handleUnlock() {
    const passcode = elements.passcodeInput.value.trim();
    if (passcode === gameData.passcode) {
        elements.passcodeError.textContent = '';
        elements.passcodeInput.value = '';
        ensureAudioContext();
        
        if (elements.unlockAudio) {
            elements.unlockAudio.currentTime = 0;
            elements.unlockAudio.play().catch(err => console.log('Audio play failed:', err));
        }
        
        openPhoneScreen('homeScreen');
        showHelpOverlay();
        showGuidance('Welcome! Investigate the mystery by exploring the phone. Collect clues to find who took the person.');
    } else {
        elements.passcodeError.textContent = 'Incorrect passcode. Try 1234.';
    }
}

function openApp(app) {
    if (app === 'messages') {
        openPhoneScreen('messagesScreen');
        showGuidance('Tap a message thread to read conversations and collect clues.');
    } else if (app === 'gallery') {
        openPhoneScreen('galleryScreen');
        showGuidance('Scroll the gallery and tap photos for possible evidence.');
    } else if (app === 'notes') {
        openPhoneScreen('notesScreen');
        showGuidance('Review notes to find hidden connections and clue triggers.');
    } else if (app === 'contacts') {
        openPhoneScreen('contactsScreen');
        showGuidance('Contacts may help you understand relationships and motives.');
    } else if (app === 'social') {
        openPhoneScreen('socialScreen');
        showGuidance('Read social posts carefully — they may reveal motive or cover-ups.');
    } else if (app === 'email') {
        openPhoneScreen('emailScreen');
        showGuidance('Open emails to find unauthorized access and hidden evidence.');
    } else if (app === 'suspect') {
        openPhoneScreen('suspectScreen');
        showGuidance('Choose who you think killed Olivia after reviewing the evidence.');
    }
}

function showHelpOverlay() {
    elements.helpOverlay.classList.add('active');
}

function closeHelpOverlay() {
    elements.helpOverlay.classList.remove('active');
}

function closeIntroOverlay() {
    if (elements.introOverlay) {
        elements.introOverlay.classList.remove('active');
    }
}

function showGuidance(message) {
    elements.guidancePopup.textContent = message;
    elements.guidancePopup.classList.add('active');
    clearTimeout(guidanceTimer);
    guidanceTimer = setTimeout(() => {
        elements.guidancePopup.classList.remove('active');
    }, 4000);
}

function renderMessagesList() {
    elements.messagesList.innerHTML = '';
    gameData.messages.forEach((thread, index) => {
        const item = document.createElement('div');
        item.className = 'message-item';
        item.innerHTML = `
            <div class="message-header">
                <div class="message-name">${thread.name}</div>
                <div class="message-time">${thread.lastSeen}</div>
            </div>
            <div class="message-preview">${thread.preview}</div>
        `;
        item.addEventListener('click', () => openMessage(index));
        elements.messagesList.appendChild(item);
    });
}

function openMessage(index) {
    const thread = gameData.messages[index];
    elements.contactName.textContent = thread.name;
    elements.conversation.innerHTML = '';
    thread.messages.forEach(message => {
        const messageEl = document.createElement('div');
        messageEl.className = `msg ${message.sender}`;
        messageEl.innerHTML = `<div class="msg-bubble">${message.text}</div>`;
        elements.conversation.appendChild(messageEl);
    });
    unlockClue(thread.clue.id);
    openPhoneScreen('messageDetailScreen');
}

function renderGallery() {
    elements.galleryGrid.innerHTML = '';
    gameData.photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const thumb = document.createElement('img');
        thumb.src = photo.src;
        thumb.alt = photo.caption;
        thumb.className = 'gallery-thumb';
        item.appendChild(thumb);
        item.addEventListener('click', () => openPhoto(index));
        elements.galleryGrid.appendChild(item);
    });
}

function openPhoto(index) {
    const photo = gameData.photos[index];
    const imageContainer = document.getElementById('photoImage');
    imageContainer.innerHTML = `<img src="${photo.src}" alt="${photo.caption}" class="photo-full" />`;
    document.getElementById('photoCaption').textContent = photo.caption;
    if (photo.clue) unlockClue(photo.clue.id);
    openPhoneScreen('photoDetailScreen');
}

function renderNotes() {
    elements.notesList.innerHTML = '';
    gameData.notes.forEach((note, index) => {
        const item = document.createElement('div');
        item.className = 'note-item';
        item.innerHTML = `
            <div class="note-date">${note.date}</div>
            <div class="note-text">${note.text}</div>
        `;
        item.addEventListener('click', () => openNote(index));
        elements.notesList.appendChild(item);
    });
}

function openNote(index) {
    const note = gameData.notes[index];
    elements.noteDetailDate.textContent = note.date;
    elements.noteDetailText.textContent = note.text;
    if (note.clue) unlockClue(note.clue.id);
    openPhoneScreen('noteDetailScreen');
}

function renderContacts() {
    elements.contactsList.innerHTML = '';
    gameData.contacts.forEach((contact, index) => {
        const item = document.createElement('div');
        item.className = 'contact-item';
        item.innerHTML = `
            <div class="contact-name">${contact.name}</div>
            <div class="contact-info">${contact.info}</div>
        `;
        item.addEventListener('click', () => openContact(index));
        elements.contactsList.appendChild(item);
    });
}

function openContact(index) {
    const contact = gameData.contacts[index];
    elements.contactDetailName.textContent = contact.name;
    elements.contactDetailInfo.textContent = contact.info;
    openPhoneScreen('contactDetailScreen');
}

function renderSocial() {
    elements.socialFeed.innerHTML = '';
    gameData.socialPosts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'social-post';
        item.innerHTML = `
            <div class="post-header">
                <div>
                    <span class="post-author">${post.author}</span>
                    <span class="post-time">${post.time}</span>
                </div>
                <span class="post-source">SocialNet</span>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button type="button" class="social-action-btn like-btn">♥ ${post.likes}</button>
                <button type="button" class="social-action-btn comment-btn">Comments (${post.comments.length})</button>
            </div>
            <div class="comment-list"></div>
        `;

        const likeBtn = item.querySelector('.like-btn');
        const commentBtn = item.querySelector('.comment-btn');
        const commentsContainer = item.querySelector('.comment-list');

        const renderComments = () => {
            commentsContainer.innerHTML = '';
            if (post.comments && post.comments.length > 0) {
                post.comments.forEach(comment => {
                    const commentItem = document.createElement('div');
                    commentItem.className = 'comment-item';
                    commentItem.innerHTML = `<span class="comment-author">${comment.author}:</span> ${comment.text}`;
                    commentsContainer.appendChild(commentItem);
                });
            } else {
                const empty = document.createElement('div');
                empty.className = 'comment-item empty';
                empty.textContent = 'No comments yet.';
                commentsContainer.appendChild(empty);
            }
        };

        renderComments();

        const toggleComments = () => {
            commentsContainer.classList.toggle('active');
            if (post.clue) unlockClue(post.clue.id);
            showGuidance('Comments opened. Read them for more clues.');
        };

        likeBtn.addEventListener('click', event => {
            event.stopPropagation();
            post.likes += 1;
            likeBtn.textContent = `♥ ${post.likes}`;
        });

        commentBtn.addEventListener('click', event => {
            event.stopPropagation();
            toggleComments();
        });

        item.addEventListener('click', () => {
            toggleComments();
        });

        elements.socialFeed.appendChild(item);
    });
}

function renderEmails() {
    elements.emailsList.innerHTML = '';
    gameData.emails.forEach((email, index) => {
        const item = document.createElement('div');
        item.className = 'email-item';
        item.innerHTML = `
            <div class="email-from">${email.from}</div>
            <div class="email-subject">${email.subject}</div>
            <div class="email-preview">${email.preview}</div>
        `;
        item.addEventListener('click', () => openEmail(index));
        elements.emailsList.appendChild(item);
    });
}

function openEmail(index) {
    const email = gameData.emails[index];
    elements.emailDetailFrom.textContent = `From: ${email.from}`;
    elements.emailDetailSubject.textContent = email.subject;
    elements.emailDetailBody.textContent = email.body;
    if (email.clue) unlockClue(email.clue.id);
    openPhoneScreen('emailDetailScreen');
}

function renderSuspects() {
    elements.suspectList.innerHTML = '';
    gameData.suspects.forEach(suspect => {
        const item = document.createElement('div');
        item.className = 'suspect-item';
        item.innerHTML = `
            <div class="suspect-name">${suspect.name}</div>
            <div class="suspect-role">${suspect.role}</div>
            <div class="suspect-evidence">${suspect.evidence}</div>
        `;
        item.addEventListener('click', () => chooseSuspect(suspect.id));
        elements.suspectList.appendChild(item);
    });
}

function chooseSuspect(suspectId) {
    let title = 'UNSOLVED CASE';
    let text = 'You did not collect enough evidence to make a confident accusation. The case remains open.';
    let isSuccess = false;

    if (suspectId === 'taylor') {
        if (gameData.clueCount >= 8) {
            title = 'CORRECT ARREST';
            text = 'Taylor Blake was arrested for Olivia Hart\'s murder after the evidence stacked up. You followed the clues and uncovered the hidden evidence.';
            isSuccess = true;
        } else if (gameData.clueCount >= 5) {
            title = 'PARTIAL SUCCESS';
            text = 'You chose the right person, but you still missed some evidence. Taylor is under suspicion for Olivia Hart\'s murder.';
            isSuccess = true;
        } else {
            title = 'INSUFFICIENT EVIDENCE';
            text = 'You suspected the right person, but there wasn\'t enough evidence to make the arrest. Olivia Hart\'s case remains unresolved.';
            isSuccess = false;
        }
    } else {
        if (gameData.clueCount >= 8) {
            title = 'WRONG SUSPECT';
            text = 'You accused the wrong person despite collecting strong evidence. The real culprit remains free.';
        } else {
            title = 'MISSED THE MARK';
            text = 'Your accusation was incorrect and the evidence available was not enough to support it. The mystery continues.';
        }
    }

    if (isSuccess && elements.successAudio) {
        elements.successAudio.currentTime = 0;
        elements.successAudio.play().catch(err => console.log('Audio play failed:', err));
    } else if (!isSuccess && elements.failAudio) {
        elements.failAudio.currentTime = 0;
        elements.failAudio.play().catch(err => console.log('Audio play failed:', err));
    }

    showScreen('resultScreen');
    elements.resultTitle.textContent = title;
    elements.resultText.textContent = `${text} (${gameData.clueCount} clues found)`;
}

function resetGame() {
    gameData.clueCount = 0;
    gameData.cluesFound = [];
    updateClueCount();
    showScreen('phoneScreen');
    openPhoneScreen('lockScreen');
}

initialize();
