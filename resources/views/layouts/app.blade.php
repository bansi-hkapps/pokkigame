<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Study IQ Clone</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">

    <style>
        body {
            background: url('{{ asset('images/grid_frame.svg') }}') repeat center center fixed;
            background-size: cover;
            font-family: 'Poppins', sans-serif;
        }

        .tag-btn {
            transition: 0.3s ease;
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 20px;
            leading-trim: NONE;
            line-height: 100%;
            letter-spacing: 0%;
            text-align: center;
            padding: 10px 20px;
        }

        .tag-btn:hover,
        .tag-btn.active {
            background-color: #7444ff !important;
            color: white !important;
            border-color: #7444ff !important;
            box-shadow: 10px 10px 35px 0px #00000033;
        }

        .pages-text {
            font-family: Inter;
            font-style: Regular;
            font-size: 20px;
        }

        .main-div {
            max-width: 400px;
            margin: auto;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .btn-earn {
            background-color: #7444ff;
            color: white;
            font-weight: 500;
            border-radius: 30px;
            border: none;
        }

        .game-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.10);
            transition: 0.25s ease-in-out;
            margin-bottom: 10px;
            border: 1px solid #CCCCCC;
        }

        .game-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 14px rgba(0, 0, 0, 0.15);
        }

        .game-thumb {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 12px;
        }

        .entry-text {
            font-weight: 600;
        }

        .play-btn {
            background: #7444FF !important;
            color: #fff !important;
            padding: 7px 0;
            font-size: 15px;
            border: none;
        }

        .play-btn:hover {
            background: #5c30d9 !important;
            transform: scale(1.03);
        }

        .related-box {
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.10);
        }

        .related-header {
            background: #7444ff;
            border-radius: 14px;
            font-size: 16px;
        }

        .related-list {
            margin-top: 10px;
        }

        .related-item {
            background: #ffffff;
            padding: 12px 15px;
            font-size: 15px;
            border-radius: 10px;
            margin-bottom: 10px;
            border: 1px solid #e5e5e5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #333;
            cursor: pointer;
            transition: 0.2s ease-in-out;
        }

        .related-item:hover {
            background: #f7f2ff;
            border-color: #d7c7ff;
            transform: translateX(3px);
        }

        .arrow {
            color: #7e7e7e;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="main-div">
            @yield('content')
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    @yield('scripts')

</body>

</html>
