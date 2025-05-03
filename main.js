<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gelişmiş Kağıt-Makas-Taş Oyunu</title>
  <style>
    :root {
      --primary-color: #4a148c;
      --secondary-color: #ff6f00;
      --background-light: #f5f5f5;
      --text-color: #333;
      --win-color: #2e7d32;
      --lose-color: #c62828;
      --draw-color: #ff8f00;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: var(--background-light);
      color: var(--text-color);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-image: radial-gradient(circle at 10% 20%, rgba(234, 249, 249, 0.67) 0.1%, rgba(239, 249, 251, 0.63) 90.1%);
    }

    header {
      text-align: center;
      margin-bottom: 30px;
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      color: var(--primary-color);
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--secondary-color);
      margin-bottom: 20px;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 800px;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      padding: 30px;
      margin-bottom: 20px;
    }

    .players {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 30px;
    }

    .player {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 45%;
    }

    .player-title {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--primary-color);
    }

    .choice-display {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 70px;
      margin-bottom: 15px;
      box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .choice-text {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .vs {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      color: var(--secondary-color);
    }

    .choices {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 30px 0;
      flex-wrap: wrap;
    }

    .choice-btn {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: none;
      background-color: white;
      font-size: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .choice-btn:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    .choice-btn:active {
      transform: translateY(0) scale(0.98);
    }

    .choice-btn.rock {
      background-color: #e0e0e0;
      color: #424242;
    }

    .choice-btn.paper {
      background-color: #e3f2fd;
      color: #1565c0;
    }

    .choice-btn.scissors {
      background-color: #ffebee;
      color: #c62828;
    }

    .result-container {
      text-align: center;
      margin: 20px 0;
    }

    .result-text {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 10px;
      min-height: 60px;
    }

    .win {
      color: var(--win-color);
    }

    .lose {
      color: var(--lose-color);
    }

    .draw {
      color: var(--draw-color);
    }

    .score-container {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 20px;
    }

    .score-box {
      background-color: white;
      padding: 15px 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .score-title {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: var(--primary-color);
    }

    .score-value {
      font-size: 2rem;
      font-weight: bold;
    }

    .game-info {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      margin-top: 20px;
      width: 100%;
      max-width: 800px;
    }

    .game-info h2 {
      color: var(--primary-color);
      margin-bottom: 10px;
      text-align: center;
    }

    .rules {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px;
    }

    .rule-item {
      flex: 1;
      min-width: 200px;
      text-align: center;
      padding: 10px;
    }

    .rule-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .reset-btn {
      background-color: var(--secondary-color);
      color: white;
      border: none;
      padding: 12px 25px;
      font-size: 1.1rem;
      border-radius: 30px;
      cursor: pointer;
      margin-top: 20px;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(255, 111, 0, 0.3);
    }

    .reset-btn:hover {
      background-color: #e65100;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255, 111, 0, 0.4);
    }

    .reset-btn:active {
      transform: translateY(0);
    }

    .animated {
      animation: bounce 0.5s ease;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    .pulse {
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @media (max-width: 768px) {
      .players {
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
      
      .player {
        width: 100%;
      }
      
      .choices {
        gap: 10px;
      }
      
      .choice-btn {
        width: 80px;
        height: 80px;
        font-size: 40px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Kağıt-Makas-Taş Oyunu</h1>
    <p class="subtitle">En iyi 5'e ulaşan kazanır!</p>
  </header>

  <div class="game-container">
    <div class="score-container">
      <div class="score-box">
        <div class="score-title">Senin Skorun</div>
        <div class="score-value" id="player-score">0</div>
      </div>
      <div class="score-box">
        <div class="score-title">Bilgisayar Skoru</div>
        <div class="score-value" id="computer-score">0</div>
      </div>
    </div>

    <div class="players">
      <div class="player">
        <div class="player-title">Sen</div>
        <div class="choice-display" id="player-choice">?</div>
        <div class="choice-text" id="player-choice-text">Seçiminizi yapın</div>
      </div>

      <div class="vs">VS</div>

      <div class="player">
        <div class="player-title">Bilgisayar</div>
        <div class="choice-display" id="computer-choice">?</div>
        <div class="choice-text" id="computer-choice-text">Bekleniyor</div>
      </div>
    </div>

    <div class="result-container">
      <div class="result-text" id="result-text">Hadi oynayalım!</div>
    </div>

    <div class="choices">
      <button class="choice-btn rock" onclick="playGame('taş')">✊</button>
      <button class="choice-btn paper" onclick="playGame('kağıt')">✋</button>
      <button class="choice-btn scissors" onclick="playGame('makas')">✌️</button>
    </div>

    <button class="reset-btn" onclick="resetGame()">Oyunu Sıfırla</button>
  </div>

  <div class="game-info">
    <h2>Oyun Kuralları</h2>
    <div class="rules">
      <div class="rule-item">
        <div class="rule-icon">✊</div>
        <p>Taş makası kırar</p>
      </div>
      <div class="rule-item">
        <div class="rule-icon">✋</div>
        <p>Kağıt taşı sarar</p>
      </div>
      <div class="rule-item">
        <div class="rule-icon">✌️</div>
        <p>Makas kağıdı keser</p>
      </div>
    </div>
  </div>

  <audio id="win-sound" src="https://www.soundjay.com/buttons/sounds/button-10.mp3"></audio>
  <audio id="lose-sound" src="https://www.soundjay.com/buttons/sounds/button-3.mp3"></audio>
  <audio id="draw-sound" src="https://www.soundjay.com/buttons/sounds/button-09.mp3"></audio>
  <audio id="click-sound" src="https://www.soundjay.com/buttons/sounds/button-21.mp3"></audio>

  <script>
    let playerScore = 0;
    let computerScore = 0;
    const choices = ['taş', 'kağıt', 'makas'];
    const emojis = { taş: '✊', kağıt: '✋', makas: '✌️' };
    const choiceNames = { taş: 'Taş', kağıt: 'Kağıt', makas: 'Makas' };

    function playGame(playerChoice) {
      // Oynat tıklama sesi
      document.getElementById('click-sound').play();
      
      // Bilgisayarın seçimini rastgele yap
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      
      // Seçimleri göster
      document.getElementById('player-choice').textContent = emojis[playerChoice];
      document.getElementById('computer-choice').textContent = emojis[computerChoice];
      document.getElementById('player-choice-text').textContent = choiceNames[playerChoice];
      document.getElementById('computer-choice-text').textContent = choiceNames[computerChoice];
      
      // Animasyon ekle
      document.getElementById('player-choice').classList.add('animated');
      document.getElementById('computer-choice').classList.add('animated');
      
      // Animasyon bitince class'ı kaldır
      setTimeout(() => {
        document.getElementById('player-choice').classList.remove('animated');
        document.getElementById('computer-choice').classList.remove('animated');
      }, 500);
      
      // Sonucu belirle
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      
      // Skoru güncelle
      updateScore(result);
      
      // Oyun bitiş kontrolü
      checkGameEnd();
    }
    
    function determineWinner(player, computer) {
      if (player === computer) return 'draw';
      
      if (
        (player === 'taş' && computer === 'makas') ||
        (player === 'kağıt' && computer === 'taş') ||
        (player === 'makas' && computer === 'kağıt')
      ) {
        return 'win';
      }
      
      return 'lose';
    }
    
    function displayResult(result) {
      const resultText = document.getElementById('result-text');
      resultText.className = 'result-text ' + result;
      
      switch(result) {
        case 'win':
          resultText.textContent = 'Kazandın! 🎉';
          document.getElementById('win-sound').play();
          break;
        case 'lose':
          resultText.textContent = 'Kaybettin! 😢';
          document.getElementById('lose-sound').play();
          break;
        case 'draw':
          resultText.textContent = 'Berabere! 🤝';
          document.getElementById('draw-sound').play();
          break;
      }
    }
    
    function updateScore(result) {
      if (result === 'win') playerScore++;
      if (result === 'lose') computerScore++;
      
      document.getElementById('player-score').textContent = playerScore;
      document.getElementById('computer-score').textContent = computerScore;
      
      // Skor güncelleme animasyonu
      const scoreElements = [
        document.getElementById('player-score'),
        document.getElementById('computer-score')
      ];
      
      scoreElements.forEach(el => {
        el.classList.add('pulse');
        setTimeout(() => el.classList.remove('pulse'), 1000);
      });
    }
    
    function checkGameEnd() {
      if (playerScore === 5 || computerScore === 5) {
        setTimeout(() => {
          const winner = playerScore === 5 ? 'Tebrikler! Sen kazandın! 🏆' : 'Bilgisayar kazandı! 💻';
          alert(`${winner}\n\nSon skor: Sen ${playerScore} - ${computerScore} Bilgisayar\n\nOyun sıfırlanıyor.`);
          resetGame();
        }, 1000);
      }
    }
    
    function resetGame() {
      playerScore = 0;
      computerScore = 0;
      
      document.getElementById('player-score').textContent = '0';
      document.getElementById('computer-score').textContent = '0';
      document.getElementById('result-text').textContent = 'Hadi oynayalım!';
      document.getElementById('result-text').className = 'result-text';
      
      document.getElementById('player-choice').textContent = '?';
      document.getElementById('computer-choice').textContent = '?';
      document.getElementById('player-choice-text').textContent = 'Seçiminizi yapın';
      document.getElementById('computer-choice-text').textContent = 'Bekleniyor';
      
      // Tıklama sesi çal
      document.getElementById('click-sound').play();
    }
  </script>
</body>
</html>
