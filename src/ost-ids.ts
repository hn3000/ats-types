
export type Difficulty = "Beginner"|"Regular"|"Expert"|"Cardio";
export type ChoreoMode = 0|1|2;
export interface IChoreoInfo {
  choreoID: string;
  choreoDifficulty: Difficulty|string;

  modes: ChoreoMode[];
}
export interface ISongInfo {
  songID: string;
  title: string;
  artist: string;
  choreos: {
    Beginner?: IChoreoInfo;
    Regular?: IChoreoInfo;
    Expert?: IChoreoInfo;
    Cardio?: IChoreoInfo;
    [x: string]: IChoreoInfo;
  }
};

export const ostSongs = [
  {
    "songID": "3",
    "title": "Addicted To A Memory",
    "artist": "Zedd",
    "choreos": {
      "Beginner": {
        "choreoID": "37d04fa1a1e0afdf8197ef9846f20e30fc06bb024ed326315a856f9044d98c0f",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "5c1c3c27b76b4c0a79bbb3babe7d822aea3d43b2a05ad47875e0ce066e1f8155",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "7d7966ba4912c243890b693f626b7c5d8f4922d900ecfbd7fada9597cb33a8c3",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "ba4003b1613c2a01f3ffbb64cb68c8ceffa42d5edeaf91caefdd6e9bff4e663f",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "1",
    "title": "Anemone",
    "artist": "Naden",
    "choreos": {
      "Beginner": {
        "choreoID": "562456641cb6d5de762b7c5f99a190c21890ba163978e939786a4bf6112f00f5",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "18ac9d3ee6a38a810c92184fc5ec8d9ed20c5a46f7039516ad8fefbde35eefbd",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "0d5c73b54febd3c2f634f3f7ef00e362a04124eac75b385454894f09a6df9e33",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "2b4ad2494b99b76eaa1c023bf9dab8e23532595822c7555b2ebe7b24a9e43e33",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "2",
    "title": "Bangarang",
    "artist": "Skrillex",
    "choreos": {
      "Beginner": {
        "choreoID": "8e62dbebfc313b7a23674345de2c3b8b5265d33a6efa1ff2448a536553e696b4",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "badffefacce3eaad78be04d3c33e02ce74e036965e8cf07e1d82906fc1d04be3",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "5b8eca5bf3a2d32aebbd632b2b8d9c1413c2b7d0fe4b5e111d4023b920ff509f",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "be0d11c1b3c2029b3fabfa87c2d4cb2afb10f5613895dfda3871d9543c5a8b0a",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "15",
    "title": "Can't Take It (pt2)",
    "artist": "Hot Rod Elegants",
    "choreos": {
      "Beginner": {
        "choreoID": "82390f12dcbb1646406829072a73c1295b942a115fbc9619ef17b4947290674a",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "db8a7858447543326fd5dbf82bccc368dbc778d687ac60ef878a89407f723c80",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "9c3b8beb904f26763a75e3f305f55fdf30e43058fbc21ea47e04400205128788",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "c4b7a9265926b506e1a362eb5b00eb54775ebd3f045426835cf6387128105b41",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "b983058f6236549d08f6d371044826da29bca4bd8d8b0f52073731112659109e",
    "title": "Dance Monkey",
    "artist": "Tones And I",
    "choreos": {
      "Beginner": {
        "choreoID": "a576303d64da7f66c15169d2c5dc2f98ad88bdb211e0c0ef2c74eeb64a41dba6",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "9979b9f192ec61ad5b8092387e8bcef122da00fe74658492f22b699793ea609c",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "31caf894abb0d6215eadc29ae6d6012d12dea099ae1c6f9e90dddd920035a05f",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "02d5aace7f7bbb8bfa459b67ff126db6a9432e2defbb280c62b74839c1e7720c",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "9",
    "title": "Drift",
    "artist": "Rafaël Frost",
    "choreos": {
      "Beginner": {
        "choreoID": "fc275cb291c506de40a444594ff5ba09932fc322336288baa0886113c4cac724",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "d0e89300c1de055f8d22890d5bfa2ae4b4b6123e8bede92c5be352536539abd1",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "7b9ecf8cdfcb7b0c4a660515d14b0727180918bf54f1fd7ffa717fc0db4d5a17",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "e93f5a51969384d114c1a02f221de4e697af937453bfc7a752750f5c2c798313",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "16",
    "title": "Freedom",
    "artist": "The Originals",
    "choreos": {
      "Beginner": {
        "choreoID": "6fb3dc224dcc3a0f76f8e54818734e3868cde095c049036428731fb1ada9e062",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "f3abee91df596dd0579363662360f6fadb5faa9e228771ca9bc84fca3e944e4c",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "55492e19b8ac37b68c298b8d8fcf5a35f8761b506bdccec3dfa02a3993c967af",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "85bb83e9547570b9aa88d7d7c23cdab4cec2c27c790a690f531b77e721f041f7",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "21",
    "title": "Gangnam Style",
    "artist": "Psy",
    "choreos": {
      "Beginner": {
        "choreoID": "be3d3e3265f6507ca4f33b455a45c5cb3fa0cb5107c2aeac6208adbe210a284e",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "cdd733fba2a751774c7223b3f632533deebe2cb72d0ee97169e5dc6b5241b7e7",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "9a7a4cb9f3f130b06853b5423a951e9fcb9080b96476ab35a5ed387e55c81e23",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "e0c92abd8dd281844bc1256c9bb6e8ad11120072618f6f74feb1a712939486ed",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "11",
    "title": "Golden Pineapple",
    "artist": "Tolan,",
    "choreos": {
      "Beginner": {
        "choreoID": "95fc24b988fddb028839f4583aaaa9394398a4461a1133bcff607f50046279f4",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "6a8bd7a09c00e268b486a3bd1d64281c5f180e66b306bc629cc32d9febcec3e0",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "a26e2c9e1f80d9b4078cf1489643d12d5e83265e38ec145b14532e365cb7a96c",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "1ff53c289704e2086e2b2e0dddb8d49c1781f0e7b0d43440d430a8bca3a23cd1",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "4",
    "title": "Jurassic Snack Pack",
    "artist": "PrototypeRaptor",
    "choreos": {
      "Beginner": {
        "choreoID": "c14987bf9cf156fdf55eb4ee1b93b8d64f28e5afff520b7df93f47f8dfe7af4b",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "4326a2464f33f4408428c5d68963d245412e71ea9586548438338b695ea31e4f",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "6bc1bab19320ee19955d6f5fb4fa9e0262ed05a9a1e26c389c73af21904ab22b",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "a69f79b6ebf92a224cc768d91fdaabbe9e71e71f409a95174688d4ea53b0074c",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "8",
    "title": "Just Dance",
    "artist": "Lady Gaga",
    "choreos": {
      "Beginner": {
        "choreoID": "f8c592fd090d15cc308654b3a051207bd8ea28de1d31405b7b4f6669e8057394",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "3cb5cabb1bec844dd9478ce3d92f0a6973b6639b4c1cab49b9e94de1992ec62a",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "321bbbdf2ef918de79801c0d35c4a58e5a2df3758d0782796db4a95d38e5704d",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "ab754cfdfdf6e5a416554bb444e6643f3faea025382c5431c22322b390610166",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "17",
    "title": "Keep My Cool",
    "artist": "Benj Heard",
    "choreos": {
      "Beginner": {
        "choreoID": "39f5dc7317ab27c7883297681205ee502e13278c66173f917e3306c58c15ad00",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "030f96deef4a190fc71fc0604cf7f201fdded0655b51c941717834d368962806",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "2ed08b249972040332d14f4c41f41dfe48829522cc9229d94e8039ff0c8fc2bd",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "65442fd049643a0410ca618f642686cf444261a4f9ad83579fe6fe6e93457345",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "1a6e5b76b8bc68e311965123ae9f7adb670c1069b47884fc68d85b5adb823ea1",
    "title": "Krishna",
    "artist": "Dropgun",
    "choreos": {
      "Beginner": {
        "choreoID": "fb0b1acdd3e15b7ca07d87c790af03a3e671e5c152115c1fe44b963839a9c0c1",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "b668a5439cc0bc497190ef29edce38b183af634695e740c1697de6c7b518640b",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "225de1bbc186ab713786e57da50b7ed2fcebf498a9fe1367861b590355128d28",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "27d7d3cc7d3bfbf90dc46d5401deab8f75334d7bc3a843ea8afd1bf8d4fe2d72",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "20",
    "title": "Makamba",
    "artist": "Trobi & Vorwerk",
    "choreos": {
      "Beginner": {
        "choreoID": "3d080c3a2300b8eccb83ebadfdf2dc40eb627aad19aa1d46c5bb98defc951b32",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "fcf6148ccc72efb0ef2bbe124420c4b525893114885d50ae00e36fc64f1b7452",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "783cee0bc2ca3e9652597d4548b178a2712bc2d7ca9d0e5de344b3025abddace",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "99ce37e0ed185e94f6a334b2c11e91f430bacab07d40fe5afac157bf7f5d9ece",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "5",
    "title": "Mandala",
    "artist": "Blastoyz",
    "choreos": {
      "Beginner": {
        "choreoID": "5418cfbf29f07063db5452d13b1ffa224034e06ba9a3b1c293813b2c3a463ed0",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "a36e3cf19bf2548dc0e2eff19ff81ad24820d2c12e3a33a4b56aacef6dbc59ad",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "6692ae280cb012b37534b3445e9f58630e69c29a6cfb4d615bbc541a3aaba2f2",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "5b6c4c4773f3046d9a0f013e5fbd5ffaaced04e0d1e1e9e2f6433129de66e23d",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "0",
    "title": "Red",
    "artist": "Rafaël Frost",
    "choreos": {
      "Beginner": {
        "choreoID": "038b3ebbb5f7017ca5d67d91763b131c0ceea807fa65478a7883f6d4cdba8c58",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "165c1999dd707f7935133d87118d66ad18e561d64516a25ce2038fb48c9551d8",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "a0da03fedd0c1cdcedab3428edd9812cc186299aeb3f41e574e67b326eb0a8bb",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "a9e4573f303d2d56e7bc31c5e9caeb4c26706062f376af231989ed5bfd01185b",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "6",
    "title": "Satisfaction",
    "artist": "Benny Benassi",
    "choreos": {
      "Beginner": {
        "choreoID": "a012ce5fa2d675d14d6d1e02c5164680404269417fbb166edefffac61b5f76fc",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "8044f7622255bbac2ccda4501ac0335a45a9740933c3ec8563b99922c7808d7f",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "7a7f00e596795d872510578f7ee4d513ca0564aaee08656611f5ea684af7ac06",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "82a186e74af8c91c8f2b19b9cf491a2e44ae77ad509ad2bec807950d5566c93f",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "10",
    "title": "Show Me, Tiësto",
    "artist": "Tiësto, DallasK",
    "choreos": {
      "Beginner": {
        "choreoID": "ccca03e0a4f7568a96ae6ab55786f3e2adb69eb655228f4cfe8c1c929017c5c7",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "c7605ea1cbc1afc9f376af4e335d8dbf7bf7932b00ebe3ba632f490750813bd1",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "03118b36ec16e6a5187dab7f29bc0fb3053c70872049d059f5a92cd669305848",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "a773ac640b688d3a2c25ce42cb35b07d8a5f2db1cb0060a0faa8992282aa86a7",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "19",
    "title": "SIDthesize",
    "artist": "InSine",
    "choreos": {
      "Beginner": {
        "choreoID": "8941c62209f1612fdc89a0d5d085c86f623e839c19836065c59c9e3293eff032",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "82f6673c42b9a2e03bc1cef8b420285e6e8d9623606154241da27124895aa277",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "79daa3594e9aa3fe2236d79d5342a549edf61e138181cadb78fe77f6cccd60eb",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "c375bf494cadcc21de7b4904d2b98134f0fa2e3bfd1ad6e20186531fd5e354c6",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "7",
    "title": "Sofi Needs A Ladder",
    "artist": "deadmau5",
    "choreos": {
      "Beginner": {
        "choreoID": "b120f0d7350304975909e4e2dad85962c19832b3f73551f9e708c437c50a1da3",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "9040e7b00b62f458a8a0382a6e468edf7d2ad2e20c9084d34d0e43b2d72d806a",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "615c83174bb62baf750f1f43afef5474e02b603e3f109e5dcae380211b0e2663",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "081f26e3517e857b428697e95b383388dea92c30557a8ee18e7d4fbd01a24510",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  },
  {
    "songID": "12",
    "title": "X-TYPE",
    "artist": "I KILL PXLS",
    "choreos": {
      "Beginner": {
        "choreoID": "08507e9c9705856ad737e42b0a60b4663015e1e705d9cb5b4726be2b7b58cc14",
        "choreoDifficulty": "Beginner",
        "modes": [
          0,
          1
        ]
      },
      "Regular": {
        "choreoID": "41cc8e094e777bd74851ef778bdc7517022c86ee0f9705c542790e03913ab445",
        "choreoDifficulty": "Regular",
        "modes": [
          0,
          1
        ]
      },
      "Expert": {
        "choreoID": "7af75e3f0a5bd8bfa5d941839a082df771a849a30b33d35f3f2b4c2fd5388347",
        "choreoDifficulty": "Expert",
        "modes": [
          0,
          1
        ]
      },
      "Cardio": {
        "choreoID": "0fcfd65f45882e4739cd8f40b9b7ca1d454ff992f739050d77dc74f7170024b2",
        "choreoDifficulty": "Cardio",
        "modes": [
          0,
          1
        ]
      }
    }
  }
];