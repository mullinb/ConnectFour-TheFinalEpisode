$(document).ready(function() {
  var startAppButton = document.querySelector("#start-app-button");
  startAppButton.onclick(function() {
    runApp();
    startAppButton.remove();
  });
});

function runApp() {
  var rei3 = document.querySelector("#rei3");
  var twinkle = document.querySelector("#twinkle");
  var tense = document.querySelector("#tense");
  var hollow = document.querySelector("#hollow");
  var rei1 = document.querySelector("#rei1");
  var tokyo = document.querySelector("#tokyo");
  var explosion = document.querySelector("#explosion");
  var sword = document.querySelector("#sword");
  var ghost = document.querySelector("#ghost");
  var snare = document.querySelector("#snare");
  var hhit = document.querySelector("#hhit");
  var coin = document.querySelector("#coin");

  $("body").fadeIn(100);

  rei3.volume = 0.4;
  explosion.volume = 0.7;
  sword.volume = 0.7;

  rei3.play();

  $(".audiobtn").on("mousedown.pause", function() {
    rei3.pause();
    $(".audiobtn").off("mousedown.pause");
    $(".audiobtn").on("mousedown.play", function() {
      rei3.play();
    });
  });

  $("#loadCard").fadeOut(0);
  $("#loadCard").css({
    visibility: "visible"
  });

  $("#loadCard").addClass("titleCard");
  $("#tester1").addClass("tester");
  $("#tester2").addClass("tester2");
  $(".titleCard").css({
    zIndex: "9"
  });

  var string =
    '<div class="options"><div class="option1 name"></div><div class="option1 left"></div><div class="option1 value"></div><div class="option1 right"></div><div class="option2 name"></div><div class="option2 left"></div><div class="option2 value"></div><div class="option2 right"></div><div class="option3 name"></div><div class="option3 left"></div><div class="option3 value"></div><div class="option3 right"></div><div class="option4 name"></div><div class="option4 left"></div><div class="option4 value"></div><div class="option4 right"></div><div class="startDialog"></div></div>';

  $("#loadOptions").html(string);
  $(".options").fadeOut(0);

  function fadeTitle() {
    $(".titleCard").fadeIn(5500);
    $(".btn").on("click", function() {
      hollow.volume = 0.7;
      hollow.play();
      twinkle.play();
      twinkle.play();
      snare.play();
      $(".options").css({
        visibility: "visible"
      });
      $(".options").fadeIn(1000);
    });
  }
  setTimeout(fadeTitle, 5000);

  $(".shader").css({
    zIndex: "4"
  });
  $(".shader").fadeOut(3000);
  function fadeInShader() {
    $(".shader").fadeTo(3000, 0.8);
  }

  setTimeout(fadeInShader, 4000);

  var option1val = 1;
  var option2val = 1;
  var option3val = 7;
  var option4val = 4;

  $(".option1.left").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option1val === 2) {
      $(".option1.value").css({
        backgroundImage: "url(ONE.png)"
      });
      option1val = 1;
      if (option2val === 2) {
        $(".option2.value").css({
          backgroundImage: "url(P1.png)"
        });
        option2val = 1;
      }
    }
  });

  $(".option1.right").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option1val === 1) {
      $(".option1.value").css({
        backgroundImage: "url(TWO.png)"
      });
      option1val = 2;
      if (option2val === 3) {
        $(".option2.value").css({
          backgroundImage: "url(P1.png)"
        });
        option2val = 1;
      }
    }
  });

  $(".option2.left").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option2val === 2) {
      $(".option2.value").css({
        backgroundImage: "url(P1.png)"
      });
      option2val = 1;
    }
    if (option2val === 3) {
      $(".option2.value").css({
        backgroundImage: "url(P1.png)"
      });
      option2val = 1;
    }
    if (option2val === 4) {
      if (option1val === 1) {
        $(".option2.value").css({
          backgroundImage: "url(COM.png)"
        });
        option2val = 3;
      }
      if (option1val === 2) {
        $(".option2.value").css({
          backgroundImage: "url(P2.png)"
        });
        option2val = 2;
      }
    }
  });
  $(".option2.right").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option2val === 3) {
      $(".option2.value").css({
        backgroundImage: "url(RDM.png)"
      });
      option2val = 4;
    }
    if (option2val === 2) {
      $(".option2.value").css({
        backgroundImage: "url(RDM.png)"
      });
      option2val = 4;
    }
    if (option2val === 1) {
      if (option1val === 2) {
        $(".option2.value").css({
          backgroundImage: "url(P2.png)"
        });
        option2val = 2;
      }
      if (option1val === 1) {
        $(".option2.value").css({
          backgroundImage: "url(COM.png)"
        });
        option2val = 3;
      }
    }
  });

  $(".option3.left").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option3val <= 7) {
      option3val = 7;
      popUpMinValue1();
    } else if (option3val - option4val >= 3) {
      option3val--;
      option4val--;
      if (option4val < 3) {
        option4val = 3;
      }
      if (option3val <= 7) {
        option3val = 7;
      }
    } else {
      popUpBadValue1();
    }
    changeCoinNumber();
    changeColumnNumber();
  });
  $(".option3.right").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option3val === 10) {
      option3val = 10;
      popUpMaxValue1();
    } else if (option3val - option4val <= 3) {
      option3val++;
      option4val++;
      if (option4val > 7) {
        option4val = 7;
      }
    } else {
      popUpBadValue2();
    }
    if (option3val > 10) {
      option3val = 10;
    }
    changeColumnNumber();
    changeCoinNumber();
  });

  function popUpBadValue1() {
    // console.log("Too many coins required for victory to reduce columns")
  }
  function popUpBadValue2() {
    // console.log("Too few coins required for victory to increase columns")
  }
  function popUpMinValue1() {
    // console.log("The minimum number of columns is seven.")
  }

  function popUpMaxValue1() {
    // console.log("The maximum number of columns is ten.")
  }

  function changeColumnNumber() {
    if (option3val === 7) {
      $(".option3.value").css({
        backgroundImage: "url(SEVEN.png)"
      });
    } else if (option3val === 8) {
      $(".option3.value").css({
        backgroundImage: "url(EIGHT.png)"
      });
    } else if (option3val === 9) {
      $(".option3.value").css({
        backgroundImage: "url(NINE.png)"
      });
    } else if (option3val === 10) {
      $(".option3.value").css({
        backgroundImage: "url(TEN.png)"
      });
    }
  }

  $(".option4.left").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option4val === 3) {
      option4val = 3;
      popUpMinValue2();
    } else if (option3val - option4val <= 3) {
      option4val--;
      if (option4val < 3) {
        option4val = 3;
      }
    } else {
      popUpBadValue3();
    }
    changeCoinNumber();
  });
  $(".option4.right").on("click", function() {
    tense.play();
    tense.currentTime = 0;
    if (option3val - option4val >= 3) {
      option4val++;
    } else {
      popUpBadValue4();
    }
    if (option4val > 7) {
      option4val = 7;
      popUpMaxValue2();
    }
    changeCoinNumber();
  });

  function popUpBadValue3() {
    // console.log("Too many columns to reduce number of coins required for victory")
  }
  function popUpBadValue4() {
    // console.log("Too few columns to increase number of coins required for victory")
  }
  function popUpMinValue2() {
    // console.log("The minimum number of coins to win is three.")
  }
  function popUpMaxValue2() {
    // console.log("The maximum number of coins to win is seven.")
  }

  function changeCoinNumber() {
    if (option4val === 3) {
      $(".option4.value").css({
        backgroundImage: "url(THREE.png)"
      });
    } else if (option4val === 4) {
      $(".option4.value").css({
        backgroundImage: "url(FOUR.png)"
      });
    } else if (option4val === 5) {
      $(".option4.value").css({
        backgroundImage: "url(FIVE.png)"
      });
    } else if (option4val === 6) {
      $(".option4.value").css({
        backgroundImage: "url(SIX.png)"
      });
    } else if (option4val === 7) {
      $(".option4.value").css({
        backgroundImage: "url(SEVEN.png)"
      });
    }
  }
  function startButtonLogic() {
    $(".startDialog").on("click.startGame", function() {
      $(".startDialog").off("click.startGame");
      tokyo.pause();
      tokyo.currentTime = 0;
      hollow.volume = 0.7;
      hollow.currentTime = 0;
      snare.currentTime = 0;
      twinkle.currentTime = 0;
      hollow.play();
      twinkle.play();
      twinkle.play();
      snare.play();
      $(".shader").css({
        zIndex: 4
      });
      $(".shader").fadeTo(3000, 1);
      $(".name").fadeTo(3000, 0);
      $(".left").fadeTo(3000, 0);
      $(".right").fadeTo(3000, 0);
      $(".value").fadeTo(3000, 0);
      setTimeout(function() {
        $("#loadCard").fadeTo(3000, 0);
      }, 3000);

      $("#rei3").animate({ volume: 0 }, 7000);

      setTimeout(function() {
        $("#loadCard").fadeOut(0);
        $("#loadCard").css({
          visibility: "hidden",
          zIndex: -5
        });
        $("#tester1").remove();
        $("#tester2").remove();
        $("body").append($(".shader"));
        $(".shader").fadeOut(3000);
        rei1.volume = 0;
        rei1.play();
        $("#rei1").animate({ volume: 1 }, 5000);
        beginGame();
      }, 7000);
    });
  }
  startButtonLogic();

  //====================GAME STATE VARIABLES=================//

  var turn = 0;
  var gProg = {};
  var dataArray = [];

  var lastCoin;

  var firstGameCounter = true;
  var happening = false;
  var gameEnding = false;

  var computerPlayer = false;
  var squares;
  var gaps;
  var slots;

  var currentOption1 = option1val;
  var currentOption2 = option2val;
  var currentOption3 = option3val;
  var currentOption4 = option4val;

  function beginGame() {
    currentOption1 = option1val;
    currentOption2 = option2val;
    currentOption3 = option3val;
    currentOption4 = option4val;

    if (option1val === 1) {
      computerPlayer = true;
    } else {
      computerPlayer = false;
    }
    if (option2val === 4) {
      var z = getRandomInt(0, 2);
      if (z === 0) {
        option2val = 1;
      } else {
        if (option1val === 1) {
          option2val = 3;
        } else {
          option2val = 2;
        }
      }
    }

    $("body").css({
      backgroundImage: "url(background.jpg)"
    });
    generateBoardAndDataTrackers();
    rdyCoin();

    if (firstGameCounter == true) {
      setUpControlEvents();
    }
    firstGameCounter = false;

    if (computerPlayer == true && option2val == 3) {
      happening = true;
      setTimeout(engageAI, 2000 * getRandomArbitrary(1, 3));
    }
    console.log(dataArray);
  }

  function generateBoardAndDataTrackers() {
    dataArray = [];
    gProg = {};
    turn = 0;

    if (option2val == 2 || option2val == 3) {
      turn++;
    }

    if (firstGameCounter == true) {
      $("body").append(
        "<div id='bodydiv'><div id='playzone'></div><div id='gameboard'></div></div>"
      );
    } else {
      $(".slots").detach();
      $(".squares").detach();
      $(".red").remove();
      $(".yellow").remove();
      $("#bodydiv").css({
        visibility: "visible"
      });
    }

    $("#gameboard").css({
      width: option3val * 100 + 4,
      gridTemplateColumns: "repeat(" + option3val + ", 1fr)"
    });

    $("#playzone").css({
      width: option3val * 100 + 108,
      gridTemplateColumns: "repeat(" + (option3val + 1) + ", 1fr)"
    });

    (function makeDataTrackers() {
      for (var i = 0; i < option3val; i++) {
        gProg["col" + i] = 0;
      }
      for (var j = 0; j < 7; j++) {
        dataArray.push([]);
      }
      for (var k = 0; k < 7; k++) {
        for (var l = 0; l < option3val + 1; l++) {
          if (k === 6) {
            dataArray[k].push(undefined);
          } else if (l === option3val) {
            dataArray[k].push(undefined);
          } else {
            dataArray[k].push(null);
          }
        }
      }
    })();

    (function makePlayzoneSlots() {
      for (var i = 0; i < option3val + 1; i++) {
        var plays = document.createElement("div");
        plays.className = "slots";
        plays.id = "box" + i;
        if (i == option3val) {
          plays.className = "slots playSlot";
        }
        document.getElementById("playzone").appendChild(plays);
      }
    })();

    (function makeGameboard() {
      for (var x = 0; x < option3val * 6; x++) {
        var board = document.createElement("div");
        board.className = "squares";
        document.getElementById("gameboard").appendChild(board);
      }
    })();

    squares = $(".squares");

    setTimeout(function gapTheSquares() {
      for (var i = 0; i < squares.length; i++) {
        $(squares[i]).append("<div class='gaps'></div>");
      }
      gaps = $(".gaps");
      slots = $(".slots");
    }, 100);

    $("body").fadeIn(6000);
  }

  //=====================================ENDGAME CONTENT================================///

  (function prepareEndgameContent() {
    $("body").append("<div class='endgameFullscreenRed'></div>");
    $("body").append("<div class='endgameFullscreenYellow'></div>");
    $("body").append("<div class='endgameDecision'></div>");
    $(".endgameDecision").append(
      "<div class='winBanner'></div><div class='deathRebirth'></div><div class='accessInstrumentality'></div>"
    );
    $(".endgameFullscreenRed").css({
      backgroundImage: "url(evaRedWin.jpg)"
    });
    $(".endgameFullscreenYellow").css({
      backgroundImage: "url(evaWinYellow.jpg)"
    });
  })();

  function victoryChecks() {
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < option3val; j++) {
        try {
          if ($(dataArray[i][j]).is(".red")) {
            winConditions(".red", i, j);
          } else if ($(dataArray[i][j]).is(".yellow")) {
            winConditions(".yellow", i, j);
          }
        } catch (c) {}
      }
    }
  }
  function winConditions(color, i, j) {
    if (option4val === 4) {
      try {
        if (
          $(dataArray[i][j + 1]).is(color) &&
          $(dataArray[i][j + 2]).is(color) &&
          $(dataArray[i][j + 3]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i][j + 1]).addClass("victory");
            $(dataArray[i][j + 2]).addClass("victory");
            $(dataArray[i][j + 3]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j]).is(color) &&
          $(dataArray[i + 2][j]).is(color) &&
          $(dataArray[i + 3][j]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j]).addClass("victory");
            $(dataArray[i + 2][j]).addClass("victory");
            $(dataArray[i + 3][j]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j + 1]).is(color) &&
          $(dataArray[i + 2][j + 2]).is(color) &&
          $(dataArray[i + 3][j + 3]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j + 1]).addClass("victory");
            $(dataArray[i + 2][j + 2]).addClass("victory");
            $(dataArray[i + 3][j + 3]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j - 1]).is(color) &&
          $(dataArray[i + 2][j - 2]).is(color) &&
          $(dataArray[i + 3][j - 3]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j - 1]).addClass("victory");
            $(dataArray[i + 2][j - 2]).addClass("victory");
            $(dataArray[i + 3][j - 3]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        }
      } catch (e) {}
    } else if (option4val === 3) {
      try {
        if (
          $(dataArray[i][j + 1]).is(color) &&
          $(dataArray[i][j + 2]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i][j + 1]).addClass("victory");
            $(dataArray[i][j + 2]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j]).is(color) &&
          $(dataArray[i + 2][j]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j]).addClass("victory");
            $(dataArray[i + 2][j]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j + 1]).is(color) &&
          $(dataArray[i + 2][j + 2]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j + 1]).addClass("victory");
            $(dataArray[i + 2][j + 2]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j - 1]).is(color) &&
          $(dataArray[i + 2][j - 2]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j - 1]).addClass("victory");
            $(dataArray[i + 2][j - 2]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        }
      } catch (e) {}
    } else if (option4val === 5) {
      try {
        if (
          $(dataArray[i][j + 1]).is(color) &&
          $(dataArray[i][j + 2]).is(color) &&
          $(dataArray[i][j + 3]).is(color) &&
          $(dataArray[i][j + 4]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i][j + 1]).addClass("victory");
            $(dataArray[i][j + 2]).addClass("victory");
            $(dataArray[i][j + 3]).addClass("victory");
            $(dataArray[i][j + 4]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j]).is(color) &&
          $(dataArray[i + 2][j]).is(color) &&
          $(dataArray[i + 3][j]).is(color) &&
          $(dataArray[i + 4][j]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j]).addClass("victory");
            $(dataArray[i + 2][j]).addClass("victory");
            $(dataArray[i + 3][j]).addClass("victory");
            $(dataArray[i + 4][j]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j + 1]).is(color) &&
          $(dataArray[i + 2][j + 2]).is(color) &&
          $(dataArray[i + 3][j + 3]).is(color) &&
          $(dataArray[i + 4][j + 4]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j + 1]).addClass("victory");
            $(dataArray[i + 2][j + 2]).addClass("victory");
            $(dataArray[i + 3][j + 3]).addClass("victory");
            $(dataArray[i + 4][j + 4]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j - 1]).is(color) &&
          $(dataArray[i + 2][j - 2]).is(color) &&
          $(dataArray[i + 3][j - 3]).is(color) &&
          $(dataArray[i + 4][j - 4]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j - 1]).addClass("victory");
            $(dataArray[i + 2][j - 2]).addClass("victory");
            $(dataArray[i + 3][j - 3]).addClass("victory");
            $(dataArray[i + 4][j - 4]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        }
      } catch (e) {}
    } else if (option4val === 6) {
      try {
        if (
          $(dataArray[i][j + 1]).is(color) &&
          $(dataArray[i][j + 2]).is(color) &&
          $(dataArray[i][j + 3]).is(color) &&
          $(dataArray[i][j + 4]).is(color) &&
          $(dataArray[i][j + 5]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i][j + 1]).addClass("victory");
            $(dataArray[i][j + 2]).addClass("victory");
            $(dataArray[i][j + 3]).addClass("victory");
            $(dataArray[i][j + 4]).addClass("victory");
            $(dataArray[i][j + 5]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j]).is(color) &&
          $(dataArray[i + 2][j]).is(color) &&
          $(dataArray[i + 3][j]).is(color) &&
          $(dataArray[i + 4][j]).is(color) &&
          $(dataArray[i + 5][j]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j]).addClass("victory");
            $(dataArray[i + 2][j]).addClass("victory");
            $(dataArray[i + 3][j]).addClass("victory");
            $(dataArray[i + 4][j]).addClass("victory");
            $(dataArray[i + 5][j]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j + 1]).is(color) &&
          $(dataArray[i + 2][j + 2]).is(color) &&
          $(dataArray[i + 3][j + 3]).is(color) &&
          $(dataArray[i + 4][j + 4]).is(color) &&
          $(dataArray[i + 5][j + 5]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j + 1]).addClass("victory");
            $(dataArray[i + 2][j + 2]).addClass("victory");
            $(dataArray[i + 3][j + 3]).addClass("victory");
            $(dataArray[i + 4][j + 4]).addClass("victory");
            $(dataArray[i + 5][j + 5]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j - 1]).is(color) &&
          $(dataArray[i + 2][j - 2]).is(color) &&
          $(dataArray[i + 3][j - 3]).is(color) &&
          $(dataArray[i + 4][j - 4]).is(color) &&
          $(dataArray[i + 5][j - 5]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j - 1]).addClass("victory");
            $(dataArray[i + 2][j - 2]).addClass("victory");
            $(dataArray[i + 3][j - 3]).addClass("victory");
            $(dataArray[i + 4][j - 4]).addClass("victory");
            $(dataArray[i + 5][j - 5]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        }
      } catch (e) {}
    } else if (option4val === 7) {
      try {
        if (
          $(dataArray[i][j + 1]).is(color) &&
          $(dataArray[i][j + 2]).is(color) &&
          $(dataArray[i][j + 3]).is(color) &&
          $(dataArray[i][j + 4]).is(color) &&
          $(dataArray[i][j + 5]).is(color) &&
          $(dataArray[i][j + 6]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i][j + 1]).addClass("victory");
            $(dataArray[i][j + 2]).addClass("victory");
            $(dataArray[i][j + 3]).addClass("victory");
            $(dataArray[i][j + 4]).addClass("victory");
            $(dataArray[i][j + 5]).addClass("victory");
            $(dataArray[i][j + 6]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j]).is(color) &&
          $(dataArray[i + 2][j]).is(color) &&
          $(dataArray[i + 3][j]).is(color) &&
          $(dataArray[i + 4][j]).is(color) &&
          $(dataArray[i + 5][j]).is(color) &&
          $(dataArray[i + 6][j]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j]).addClass("victory");
            $(dataArray[i + 2][j]).addClass("victory");
            $(dataArray[i + 3][j]).addClass("victory");
            $(dataArray[i + 4][j]).addClass("victory");
            $(dataArray[i + 5][j]).addClass("victory");
            $(dataArray[i + 6][j]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j + 1]).is(color) &&
          $(dataArray[i + 2][j + 2]).is(color) &&
          $(dataArray[i + 3][j + 3]).is(color) &&
          $(dataArray[i + 4][j + 4]).is(color) &&
          $(dataArray[i + 5][j + 5]).is(color) &&
          $(dataArray[i + 6][j + 6]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j + 1]).addClass("victory");
            $(dataArray[i + 2][j + 2]).addClass("victory");
            $(dataArray[i + 3][j + 3]).addClass("victory");
            $(dataArray[i + 4][j + 4]).addClass("victory");
            $(dataArray[i + 5][j + 5]).addClass("victory");
            $(dataArray[i + 6][j + 6]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        } else if (
          $(dataArray[i + 1][j - 1]).is(color) &&
          $(dataArray[i + 2][j - 2]).is(color) &&
          $(dataArray[i + 3][j - 3]).is(color) &&
          $(dataArray[i + 4][j - 4]).is(color) &&
          $(dataArray[i + 5][j - 5]).is(color) &&
          $(dataArray[i + 6][j - 6]).is(color)
        ) {
          coin.pause();
          gameEnding = true;
          happening = true;
          setTimeout(function() {
            tense.play();
            $(dataArray[i][j]).addClass("victory");
            $(dataArray[i + 1][j - 1]).addClass("victory");
            $(dataArray[i + 2][j - 2]).addClass("victory");
            $(dataArray[i + 3][j - 3]).addClass("victory");
            $(dataArray[i + 4][j - 4]).addClass("victory");
            $(dataArray[i + 5][j - 5]).addClass("victory");
            $(dataArray[i + 6][j - 6]).addClass("victory");
            setTimeout(function() {
              $(document).trigger("gameEnd", color);
            }, 750);
          }, 100);
        }
      } catch (e) {}
    }
  }

  $(document).on("gameEnd", function(e, color) {
    happening = true;
    gameEndAnimations(color);
  });

  function gameEndAnimations(color) {
    rei1.pause();
    rei1.currentTime = 0;
    tokyo.volume = 1;
    tokyo.currentTime = 0;
    tokyo.play();
    explosion.play();
    if (color === ".red") {
      setTimeout(function() {
        $("#bodydiv").css({
          visibility: "hidden"
        });
        $("body").css({
          backgroundImage: "url(evaRedWin.jpg)"
        });
      }, 200);
      setTimeout(function() {
        $(".endgameDecision").css({
          visibility: "visible",
          zIndex: 5
        });
        $(".winBanner").css({
          backgroundImage: "url(playerOneWins.png)"
        });
        sword.play();
      }, 3500);
    }
    if (color === ".yellow") {
      setTimeout(function() {
        $("#bodydiv").css({
          visibility: "hidden"
        });
        $("body").css({
          backgroundImage: "url(evaWinYellow.jpg)"
        });
      }, 200);
      if (option1val === 1) {
        setTimeout(function() {
          $(".endgameDecision").css({
            visibility: "visible",
            zIndex: 5
          });
          $(".winBanner").css({
            backgroundImage: "url(playerComWins.png)"
          });
          sword.play();
        }, 3500);
      } else {
        setTimeout(function() {
          $(".endgameDecision").css({
            visibility: "visible",
            zIndex: 5
          });
          $(".winBanner").css({
            backgroundImage: "url(playerTwoWins.png)"
          });
          sword.play();
        }, 3500);
      }
    }
  }

  $(".deathRebirth").on("click", function() {
    option1val = currentOption1;
    option2val = currentOption2;
    option3val = currentOption3;
    option4val = currentOption4;
    gameEnding = false;
    gameReset();
  });

  $(".accessInstrumentality").on("click", function() {
    gameEnding = false;
    optionsReset();
  });

  function gameReset() {
    hollow.play();
    hollow.currentTime = 0;
    twinkle.play();
    twinkle.play();
    snare.currentTime = 0;
    snare.play();
    $(".endgameDecision").css({
      visibility: "hidden",
      zIndex: -1
    });
    $(".shader").css({
      zIndex: "4"
    });

    $("#tokyo").animate({ volume: 0 }, 4000);
    $(".shader").fadeTo(3000, 1, function() {
      setTimeout(function() {
        $("body").css({
          backgroundImage: "url(background.jpg)"
        });
        $("#tokyo").animate({ volume: 0 }, 7000);
        $(".shader").fadeTo(3000, 0, function() {
          $(".shader").css({
            zIndex: "-2"
          });
        });
      }, 2000);
      happening = false;
      rei1.play();
      $("#rei1").animate({ volume: 1 }, 5000);
      beginGame();
    });
  }

  function optionsReset() {
    tense.play();
    $(".endgameDecision").css({
      visibility: "hidden",
      zIndex: -1
    });
    $(".shader").css({
      zIndex: -4
    });
    $("#loadCard").css({
      visibility: "visible",
      zIndex: 3
    });
    $(".name").fadeTo(0, 1);
    $(".left").fadeTo(0, 1);
    $(".right").fadeTo(0, 1);
    $(".value").fadeTo(0, 1);

    $("#loadCard").fadeTo(3000, 1);
    startButtonLogic();
    happening = false;
  }

  //=====================================TURN MANAGEMENT================================///

  function endOfTurnProcess() {
    happening = true;
    lastCoin = $("#coin" + turn);
    $(lastCoin).animate(
      {
        left: "+=" + getRandomArbitrary(-5, 0)
      },
      100,
      "linear",
      function() {
        $(lastCoin).animate(
          {
            left: "+=" + getRandomArbitrary(0, 5)
          },
          100,
          "linear",
          function() {
            $(lastCoin).animate(
              {
                left: "+=" + getRandomArbitrary(-4, 4)
              },
              100,
              "swing"
            );
          }
        );
      }
    );
    $(lastCoin).animate(
      {
        transform: "rotate(" + 180 * getRandomArbitrary(-1, 1) + "deg)"
      },
      {
        duration: 500,
        queue: false
      }
    );

    setTimeout(function() {
      victoryChecks();

      turn++;
      if (isEven(turn + 1) && computerPlayer == true && gameEnding === false) {
        engageAI();
      } else {
        setTimeout(function() {
          happening = false;
        }, 410);
      }

      setTimeout(function() {
        if (gameEnding == false) {
          rdyCoin();
        }
      }, 400);
    }, 1100);
  }

  //===============COMPUTER PLAYER FUNCTION =====================================================//

  function engageAI() {
    happening = true;
    var delay = 500 * getRandomArbitrary(2.5, 4);
    var possibleMoves = [];
    var moveChoice;
    setTimeout(function() {
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < option3val; j++) {
          if (
            $(dataArray[i][j]).is(".red") ||
            $(dataArray[i][j]).is(".yellow")
          ) {
            if (
              $(dataArray[i + 1][j]).is(".red") === false &&
              $(dataArray[i + 1][j]).is(".yellow") === false
            ) {
              possibleMoves.push([i + 1, j]);
            }
          }
          if (
            i === 0 &&
            $(dataArray[i][j]).is(".red") === false &&
            $(dataArray[i][j]).is(".yellow") === false
          ) {
            possibleMoves.push([i, j]);
          }
        }
      }
      moveChoice = selectMove(possibleMoves);
      executeMove(moveChoice);
      setTimeout(endOfTurnProcess, 100);
    }, delay);
  }

  function selectMove(possibleMoves) {
    var arrPm = possibleMoves;
    var moveChoice;
    var moveScores = [];
    var firstDepth;
    var firstDepthScores = [];
    var thirdDepth;
    var fourthDepth;
    var emptyEval = 0;

    arrPm.sort(function(a, b) {
      return a[1] - b[1];
    });

    for (var i = 0; i < arrPm.length; i++) {
      if (arrPm[i][0] == 0) {
        emptyEval += 1;
      }
    }
    if (emptyEval > 5) {
      var evenOdd = 0;
      if (isEven(option3val + 1) === true) {
        evenOdd += getRandomInt(-1, 2);
      } else {
        evenOdd += getRandomInt(-2, 1);
      }

      moveChoice = [0, Math.floor(arrPm.length / 2) + evenOdd];
      return moveChoice;
    }

    for (var i = 0; i < arrPm.length; i++) {
      moveScores.push(moveEvaluator(arrPm[i]));
    }

    function lookDeeper1st() {
      for (var i = 0; i < arrPm.length; i++) {
        firstDepth = arrPm.map(function(arr) {
          return arr.slice();
        });
        firstDepthScores[i] = [];
        for (var j = 0; j < arrPm.length; j++) {
          if (arrPm[j][1] === moveScores[i].move[1]) {
            firstDepth[j][0] += 1;
          }
        }
        for (var k = 0; k < firstDepth.length; k++) {
          firstDepthScores[i].push([enemyMoveEvaluator(firstDepth[k])]);
        }
      }
      for (var m = 0; m < Object.keys(firstDepthScores).length; m++) {
        for (var n = 0; n < Object.keys(firstDepthScores[m]).length; n++) {
          moveScores[m].secondVal += firstDepthScores[m][n][0].firstVal + 10;
        }
        moveScores[m].secondVal /= arrPm.length - 2;
      }
    }
    lookDeeper1st();

    for (var o = 0; o < arrPm.length; o++) {
      moveScores[o].totalVal +=
        moveScores[o].firstVal - moveScores[o].secondVal;
    }

    moveScores.sort(function(a, b) {
      return b.totalVal - a.totalVal;
    });

    moveChoice = moveScores[0].move;
    return moveChoice;
  }
  function NewMove(move) {
    this.move = move;
    this.row = move[0];
    this.column = move[1];
    this.totalVal = 0;
    this.firstVal = 0;
    this.secondVal = 0;
    this.thirdVal = 0;
  }

  // transformBoardState(move) {
  // }

  function moveEvaluator(move, iteration) {
    var thisMove = new NewMove(move);
    for (var i = 0; i < option4val; i++) {
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS BELOW
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row - 2][thisMove.column]).is(".yellow")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column]).is(".yellow")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row - 2][thisMove.column]).is(".red")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS BOTTOM LEFT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column - 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column - 3]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS BOTTOM LEFT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TO THE LEFT
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 2]).is(".yellow")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 3]).is(".yellow")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 2]).is(".red")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 3]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TO THE LEFT DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".yellow")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 2]).is(".yellow")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".red")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 2]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TOP LEFT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column - 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column - 3]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TOP LEFT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TOP RIGHT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column + 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column + 3]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TOP RIGHT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TO THE RIGHT
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 2]).is(".yellow")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 3]).is(".yellow")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 2]).is(".red")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 3]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TO THE RIGHT DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".yellow")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 2]).is(".yellow")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".red")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 2]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TO THE BOTTOM RIGHT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column + 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column + 3]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".yellow")) {
          ////CHECKING QUALITY AGAINST COINS TO THE BOTTOM RIGHT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".yellow")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".red")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".red")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(".red")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
    }
    return thisMove;
  }

  function enemyMoveEvaluator(move, iteration) {
    var thisMove = new NewMove(move);
    for (var i = 0; i < option4val; i++) {
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS BELOW
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row - 2][thisMove.column]).is(".red")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row - 2][thisMove.column]).is(".yellow")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column]).is(".yellow")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS BOTTOM LEFT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column - 3]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column - 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS BOTTOM LEFT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column - 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TO THE LEFT
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 2]).is(".red")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 3]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 2]).is(".yellow")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 3]).is(".yellow")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TO THE LEFT DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".red")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 2]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".yellow")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column - 2]).is(".yellow")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TOP LEFT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column - 3]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column - 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TOP LEFT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column - 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TOP RIGHT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column + 3]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 3][thisMove.column + 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TOP RIGHT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column - 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row + 1][thisMove.column + 1]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row + 2][thisMove.column + 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TO THE RIGHT
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 2]).is(".red")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 3]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 2]).is(".yellow")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 3]).is(".yellow")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TO THE RIGHT DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".red")) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 2]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row][thisMove.column - 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if ($(dataArray[thisMove.row][thisMove.column + 1]).is(".yellow")) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row][thisMove.column + 2]).is(".yellow")
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TO THE BOTTOM RIGHT DIAGONAL
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column + 3]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 3][thisMove.column + 3]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".red")) {
          ////CHECKING QUALITY AGAINST COINS TO THE BOTTOM RIGHT DIAGONAL DISPLACED ONCE
          thisMove.firstVal += 10;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".red")
            ) {
              thisMove.firstVal += 30;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(".red")
                ) {
                  thisMove.firstVal += 1000;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
      try {
        if ($(dataArray[thisMove.row + 1][thisMove.column - 1]).is(".yellow")) {
          thisMove.firstVal += 5;
          try {
            if (
              $(dataArray[thisMove.row - 1][thisMove.column + 1]).is(".yellow")
            ) {
              thisMove.firstVal += 40;
              try {
                if (
                  $(dataArray[thisMove.row - 2][thisMove.column + 2]).is(
                    ".yellow"
                  )
                ) {
                  thisMove.firstVal += 360;
                }
              } catch (e) {}
            }
          } catch (e) {}
        }
      } catch (e) {}
    }
    return thisMove;
  }

  function executeMove(moveChoice) {
    $(".slots").empty();
    var i = moveChoice[1];
    $("#gameboard").append(
      "<div id='coin" +
        turn +
        "' data-column=" +
        i +
        " data-row=" +
        gProg["col" + i] +
        " class='yellow'></div>"
    );
    $("#coin" + turn).css({
      left:
        $(slots[i]).offset().left +
        5 -
        document.querySelector("#bodydiv").offsetLeft,
      transform: "rotate(" + 180 * getRandomArbitrary(-1, 1) + "deg)"
    });
    coin.currentTime = 0;
    coin.play();
    dynamics.animate(
      document.querySelector("#coin" + turn),
      {
        bottom: 100 * gProg["col" + i] + 7 + getRandomArbitrary(-3, 3)
      },
      {
        type: dynamics.gravity,
        duration: 200 * (7 - gProg["col" + i]) + 7 + getRandomArbitrary(-3, 3),
        bounciness: 660,
        elasticity: 341
      }
    );
    try {
      dataArray[gProg["col" + i]][i] = $("#coin" + turn);
      gProg["col" + i]++;
    } catch (e) {}
  }

  //=============================IN-GAME EVENT FUNCTIONS AND LISTENERS======================================//

  function rdyCoin(slot) {
    slot = slot || ".playSlot";
    $(".slots").empty();
    if (isEven(turn)) {
      $(slot).append("<div class='red ready'></div>");
    } else {
      $(slot).append("<div class='yellow ready'></div>");
    }
  }

  function setUpControlEvents() {
    $(document).on("mousedown.play", function(e) {
      if (
        happening === false &&
        e.target.classList.contains("slots") &&
        e.target != document.querySelector(".playSlot") &&
        dataArray[5][$(e.target).index()] === null
      ) {
        $(".slots").empty();
        happening = true;
        for (i = 0; i < option3val; i++) {
          if (e.target == slots[i]) {
            if (isEven(turn)) {
              $("#gameboard").append(
                "<div id='coin" +
                  turn +
                  "' data-column=" +
                  i +
                  " data-row=" +
                  gProg["col" + i] +
                  " class='red'></div>"
              );
            } else {
              $("#gameboard").append(
                "<div id='coin" +
                  turn +
                  "' data-column=" +
                  i +
                  " data-row=" +
                  gProg["col" + i] +
                  " class='yellow'></div>"
              );
            }
            coin.currentTime = 0;
            coin.play();
            $("#coin" + turn).css({
              left:
                $(slots[i]).offset().left +
                5 -
                document.querySelector("#bodydiv").offsetLeft,
              transform: "rotate(" + 180 * getRandomArbitrary(-1, 1) + "deg)"
            });
            dynamics.animate(
              document.querySelector("#coin" + turn),
              {
                bottom: 100 * gProg["col" + i] + 7 + getRandomArbitrary(-3, 3)
              },
              {
                type: dynamics.gravity,
                duration:
                  200 * (7 - gProg["col" + i]) + 7 + getRandomArbitrary(-3, 3),
                bounciness: 660,
                elasticity: 341
              }
            );
            try {
              dataArray[gProg["col" + i]][i] = $("#coin" + turn);
              gProg["col" + i]++;
            } catch (e) {}
          }
        }
        setTimeout(endOfTurnProcess, 30);
      }
    });

    $(document).on("click.pick", function(e) {
      if (e.target === document.querySelector(".playSlot")) {
        $(document).on("mousemove.placement", function(e) {
          $(".ready").css({
            zIndex: -1,
            left:
              e.clientX - 50 - document.querySelector("#bodydiv").offsetLeft,
            right: "auto",
            bottom: "auto"
          });
        });
        $("#playzone").on("mousedown.dragndrop", ".slots", function() {
          $(document).off("mousemove.placement");
        });
      }
    });

    $(document).on("keydown.keys", function(e) {
      if (happening === false) {
        var x = 0;
        zones = $("#playzone").children();
        $("#playzone")
          .children()
          .each(function() {
            if (
              $(this)
                .children()
                .hasClass("ready")
            ) {
              return false;
            }
            x++;
          });
        var currentBox = $(".slots").get(x);
        if (e.keyCode == 32 && dataArray[5][x] === null) {
          e.preventDefault();
          if (
            happening === false &&
            currentBox != document.querySelector(".playSlot")
          ) {
            $(".slots").empty();
            happening = true;
            for (var i = 0; i < option3val; i++) {
              if (currentBox == $(".slots").get(i)) {
                if (isEven(turn)) {
                  $("#gameboard").append(
                    "<div id='coin" +
                      turn +
                      "' data-column=" +
                      i +
                      " data-row=" +
                      gProg["col" + i] +
                      " class='red'></div>"
                  );
                } else {
                  $("#gameboard").append(
                    "<div id='coin" +
                      turn +
                      "' data-column=" +
                      i +
                      " data-row=" +
                      gProg["col" + i] +
                      " class='yellow'></div>"
                  );
                }
                $("#coin" + turn).css({
                  left:
                    $(slots[i]).offset().left +
                    5 -
                    document.querySelector("#bodydiv").offsetLeft,
                  transform:
                    "rotate(" + 180 * getRandomArbitrary(-1, 1) + "deg)"
                });
                coin.currentTime = 0;
                coin.play();
                dynamics.animate(
                  document.querySelector("#coin" + turn),
                  {
                    bottom:
                      100 * gProg["col" + i] + 7 + getRandomArbitrary(-3, 3)
                  },
                  {
                    type: dynamics.gravity,
                    duration:
                      200 * (7 - gProg["col" + i]) +
                      7 +
                      getRandomArbitrary(-3, 3),
                    bounciness: 660,
                    elasticity: 341
                  }
                );
                try {
                  dataArray[gProg["col" + i]][i] = $("#coin" + turn);
                  gProg["col" + i]++;
                } catch (e) {}
              }
            }
            endOfTurnProcess();
          }
        }

        if (e.keyCode == 37) {
          e.preventDefault();
          x--;
          if (x < 0) {
            x = 0;
          }
          rdyCoin("#box" + x);
        }
        if (e.keyCode == 39) {
          e.preventDefault();
          x++;
          if (x >= 7) {
            x = 7;
          }
          rdyCoin("#box" + x);
        }
      }
    });
  }

  //===========MATH FUNCTIONS=============//

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function isEven(n) {
    return n == parseFloat(n) ? !(n % 2) : void 0;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function isntZero(element) {
    return element > 0;
  }
}

//======ALTERNATIVE COIN ANIMATION idea======//

// $(document).on('click', function(e){
//     if (e.target==document.querySelector(".tester")) {
//         $(".tester").removeClass("keyControl");
//         $(".tester").addClass("mouseControl");
//         $(document).on('mousemove.coin', function (e){
//             $('.tester').css({
//                 left: e.clientX-100,
//             })
//         })
//     }
// })
// $(document).on('keydown', function(e){
//     $(document).off('mousemove.coin');
//     $(".tester").removeClass("mouseControl");
//     $(".tester").addClass("keyControl");
//     if (e.keyCode===37) {
//         $('.tester').css("left", "-=100")
//     }
//     if (e.keyCode===39) {
//         $('.tester').css("left", "+=100")
//     }
//     if (e.keyCode===32) {
//         $(".tester").on("transitionend", function(){
//             $(".tester").removeClass("mouseControl");
//             $(".tester").removeClass("keyControl");
//             $(".tester").addClass("placement");
//             $('.tester').css("top", "+=800")
//         })
//
//     }
//
// })
