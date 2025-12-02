<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet">

    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            /* background: linear-gradient(135deg, #7444ff, #a255ff); */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-card {
            width: 380px;
            background: #fff;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            animation: fadeIn .6s ease-in-out;
        }


        @keyframes fadeIn {
            from {
                transform: translateY(20px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .login-card h2 {
            text-align: center;
            font-weight: 600;
            color: #7444ff;
            margin-bottom: 5px;
        }

        .login-card p {
            text-align: center;
            font-size: 14px;
            color: #555;
            margin-bottom: 25px;
        }

        .login-card input {
            width: 90%;
            padding: 12px 15px;
            margin: 10px auto;
            display: block;
            border: 2px solid #ddd;
            border-radius: 8px;
            transition: .3s;
            font-size: 15px;
        }


        .login-card input:focus {
            border-color: #6a11cb;
            outline: none;
            box-shadow: 0 0 8px rgba(106, 17, 203, .3);
        }

        .error {
            color: #e63946;
            font-size: 13px;
            margin-top: -10px;
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            padding: 12px;
            border: none;
            font-size: 16px;
            background: #7444ff;
            color: white;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: .3s;
        }

        button:hover {
            background: #5201b9;
            transform: scale(1.02);
        }
    </style>
</head>

<body>

    <form method="POST" action="{{ route('login') }}" class="login-card">
        @csrf
        <h2>Login</h2>

        <input id="email" type="email" name="email" placeholder="Email Address" value="{{ old('email') }}"
            required autofocus>
        @error('email')
            <div class="error">{{ $message }}</div>
        @enderror

        <input id="password" type="password" name="password" placeholder="Password" required>
        @error('password')
            <div class="error">{{ $message }}</div>
        @enderror

        <button type="submit">Login</button>


    </form>

</body>

</html>
