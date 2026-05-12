<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AURA — AI Unified Reality Assistant</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: linear-gradient(135deg, #f8fafc, #dbeafe, #ede9fe);
      color: #1e293b;
      min-height: 100vh;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      background: rgba(255,255,255,0.5);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255,255,255,0.3);
    }

    .logo h1 {
      font-size: 32px;
    }

    .logo p {
      color: #64748b;
      margin-top: 5px;
    }

    .btn {
      background: #7c3aed;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.3s;
    }

    .btn:hover {
      transform: scale(1.05);
    }

    .hero {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      padding: 60px 40px;
      align-items: center;
      justify-content: center;
    }

    .hero-text {
      flex: 1;
      min-width: 300px;
    }

    .tag {
      display: inline-block;
      padding: 10px 20px;
      background: rgba(255,255,255,0.6);
      border-radius: 30px;
      margin-bottom: 20px;
    }

    .hero-text h2 {
      font-size: 52px;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .hero-text p {
      color: #475569;
      font-size: 18px;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    .buttons {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .secondary-btn {
      background: rgba(255,255,255,0.7);
      border: 1px solid #cbd5e1;
      color: #1e293b;
    }

    .dashboard {
      flex: 1;
      min-width: 320px;
      background: rgba(255,255,255,0.4);
      backdrop-filter: blur(15px);
      border-radius: 30px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    .sage-icon {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      background: linear-gradient(135deg, #8b5cf6, #60a5fa);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
      font-weight: bold;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .card {
      background: rgba(255,255,255,0.7);
      padding: 20px;
      border-radius: 20px;
    }

    .card p {
      color: #64748b;
      margin-bottom: 10px;
    }

    .card h3 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    .progress {
      width: 100%;
      height: 10px;
      background: #e2e8f0;
      border-radius: 20px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #c084fc, #60a5fa);
    }

    .features {
      padding: 40px;
      text-align: center;
    }

    .features h2 {
      font-size: 42px;
      margin-bottom: 15px;
    }

    .features p {
      color: #64748b;
      max-width: 700px;
      margin: auto;
      margin-bottom: 40px;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .feature-box {
      background: rgba(255,255,255,0.5);
      padding: 30px;
      border-radius: 30px;
      transition: 0.3s;
    }

    .feature-box:hover {
      transform: translateY(-10px);
    }

    .feature-box h3 {
      margin: 20px 0 10px;
    }

    footer {
      text-align: center;
      padding: 30px;
      margin-top: 40px;
      background: rgba(255,255,255,0.3);
    }

    @media(max-width:768px) {
      .hero-text h2 {
        font-size: 38px;
      }

      header {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">
      <h1>AURA</h1>
      <p>AI Unified Reality Assistant</p>
    </div>

    <button class="btn">Launch Sage</button>
  </header>

  <section class="hero">
    <div class="hero-text">
      <div class="tag">Emotionally Intelligent Wellness AI</div>

      <h2>Protect Your Mental Space In A Hyperconnected World.</h2>

      <p>
        AURA quietly senses stress, distraction, and cognitive overload using behavioral signals and adapts your digital environment to help you stay calm and focused.
      </p>

      <div class="buttons">
        <button class="btn">Try Focus Mode</button>
        <button class="btn secondary-btn">View Dashboard</button>
      </div>
    </div>

    <div class="dashboard">
      <div class="dashboard-header">
        <div>
          <h2>Daily Wellness Overview</h2>
          <p>Good Evening — Sage is monitoring your digital balance.</p>
        </div>

        <div class="sage-icon">S</div>
      </div>

      <div class="card-grid">
        <div class="card">
          <p>Stress Level</p>
          <h3>Moderate</h3>
          <div class="progress">
            <div class="progress-fill" style="width:70%"></div>
          </div>
        </div>

        <div class="card">
          <p>Focus Score</p>
          <h3>82%</h3>
          <div class="progress">
            <div class="progress-fill" style="width:82%"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="features">
    <h2>How AURA Works</h2>

    <p>
      AURA quietly understands your digital behavior and adapts your environment to reduce burnout and mental fatigue.
    </p>

    <div class="feature-grid">
      <div class="feature-box">
        <h1>🧠</h1>
        <h3>Sense</h3>
        <p>Detect stress using typing behavior, screen time, and notification overload.</p>
      </div>

      <div class="feature-box">
        <h1>✨</h1>
        <h3>Think</h3>
        <p>Sage analyzes emotional overload patterns and provides calm support.</p>
      </div>

      <div class="feature-box">
        <h1>🌿</h1>
        <h3>Act</h3>
        <p>Automatically enable focus mode and create a peaceful digital environment.</p>
      </div>
    </div>
  </section>

  <footer>
    <p>AURA — Your emotionally intelligent digital sanctuary.</p>
  </footer>

</body>
</html>
