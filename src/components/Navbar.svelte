  <style>
    span {
      cursor: pointer;
    }
    .nav {
      box-shadow: 2px darkgrey;
      box-shadow: 0 0 5px gray;
      text-align: left;
      padding: 0 1rem;
      z-index: 1000;
    }

    .navbar-brand {
      font-size: 1.45rem;
    }
    .navbar-toggler {
      border: none;
    }

    .nav-item {
      font-size: 1.25rem;
    }

    button:focus {
      outline: none !important;
    }

  </style>
  <nav class="nav navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <span class="navbar-brand">
      <img class="mr-2" src="./images/icons/icon-128x128.png" height="63" alt="DSC Logo">
      DSC NITT
    </span>
    <button class="navbar-toggler waves-effect waves-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav text-center">
        <li class="nav-item"><a href="#technologies" rel="noopener" class="nav-link">Technologies</a></li>
        <li class="nav-item"><a href="#workshops" rel="noopener" class="nav-link">Workshops</a></li>
        <li class="nav-item"><a href="#faqs" rel="noopener" class="nav-link">FAQ</a></li>
      </ul>
    </div>
  </nav>
