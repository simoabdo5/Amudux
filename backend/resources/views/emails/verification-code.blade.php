<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; padding: 20px; }
        .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: 800; color: #ff7a00; letter-spacing: 2px; }
        .code-box { background: linear-gradient(135deg, #ff7a00, #ff4d00); padding: 25px; border-radius: 16px; text-align: center; margin: 30px 0; }
        .code { font-size: 36px; font-weight: 800; color: white; letter-spacing: 12px; }
        .info { color: #666; font-size: 14px; line-height: 1.6; }
        .warning { color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">AMUDUX</div>
        </div>
        
        <h2 style="color: #1a1a1a; text-align: center;">Vérification de votre email</h2>
        
        <p class="info">Bonjour,</p>
        <p class="info">Voici votre code de vérification pour créer un compte sur <strong>AMUDUX</strong> :</p>
        
        <div class="code-box">
            <div class="code">{{ $code }}</div>
        </div>
        
        <p class="info" style="text-align: center;">Ce code est valable pendant <strong>10 minutes</strong>.</p>
        
        <div class="warning">
            Si vous n'avez pas demandé ce code, ignorez simplement cet email.
        </div>
    </div>
</body>
</html>