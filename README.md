# Taikowiki API Documentation

## Base URL
https://taiko.wiki/api/v1

---

### 1. **GET `/song/no/{songNo}`**
#### Retrieve data for a specific song by its songNo.
- **URL Params**: 
  - `songNo` (required): A single song number (e.g., "1234").
  
#### Example Request:
GET `/song/no/1`

#### Example Response:
```json
{
  "songNo": "1",
  "order": 1072,
  "title": "てんぢく2000",
  "titleKo": "텐지쿠 2000",
  "aliasKo": null,
  "titleEn": null,
  "aliasEn": null,
  "romaji": "Tenjiku 2000",
  "bpm": {
    "min": 180,
    "max": 180
  },
  "bpmShiver": 0,
  "version": [
    "NAC",
    "AC10",
    "AC11",
    "AC12.5",
    "AC13",
    "AC14",
    "NS2",
    "WiiU3",
    "Wii1",
    "PLUS",
    "RC"
  ],
  "isAsiaBanned": 0,
  "isKrBanned": 0,
  "genre": [
    "namco"
  ],
  "artists": [
    "LindaAI-CUE",
    "ギンギツネ"
  ],
  "addedDate": 1185408000000,
  "courses": {
    "easy": {
      "level": 4,
      "playTime": 137.67,
      "balloon": [6, 6, 6, 6, 15],
      "rollTime": [0.806, 1.306, 1.306, 1.306, 1.306],
      "maxCombo": 147,
      "maxDensity": 1.07,
      "dani": [],
      "images": [
        "https://file.taiko.wiki/img/ef92512a-2eef-4f1f-90c2-32d0165a6e7e."
      ],
      "daniUsed": 0,
      "isBranched": 0
    },
    "normal": {
      "level": 7,
      "playTime": 137.67,
      "balloon": [8, 8, 8, 8, 15],
      "rollTime": [0.806, 1.306, 0.639, 0.639, 0.639, 0.639, 0.972],
      "maxCombo": 214,
      "maxDensity": 1.55,
      "dani": [],
      "images": [
        "https://file.taiko.wiki/img/5571b848-21aa-4f30-9837-3278738894f1."
      ],
      "daniUsed": 0,
      "isBranched": 0
    },
    "hard": {
      "level": 8,
      "playTime": 137.67,
      "balloon": [5, 5, 5, 5, 20],
      "rollTime": [1.89],
      "maxCombo": 593,
      "maxDensity": 4.31,
      "dani": [],
      "images": [
        "https://file.taiko.wiki/img/06e6161d-8728-4597-beb4-e990e98b3905."
      ],
      "daniUsed": 0,
      "isBranched": 0
    },
    "oni": {
      "level": 10,
      "playTime": 137.67,
      "balloon": [6, 6, 6, 6],
      "rollTime": [0.472, 0.472, 0.472, 0.472],
      "maxCombo": 831,
      "maxDensity": 6.04,
      "dani": [
        {
          "version": "momoiro",
          "dan": "8dan",
          "order": 2
        },
        {
          "version": "murasaki",
          "dan": "10dan",
          "order": 3
        }
      ],
      "images": [
        "https://file.taiko.wiki/img/83fd51f9-71a6-4eac-aca6-a66d291cf8ad."
      ],
      "daniUsed": 1,
      "isBranched": 0
    },
    "ura": null
  },
  "isDeleted": 0
}
```
---

### 2. **GET `/song/no`**
#### Retrieve data for multiple songs by their songNo.
- **Query Params**: 
  - `songno` (required): An array of song numbers (e.g., `["2", "3"]`).

#### Example Request:
GET `/song/no?songno=["2", "3"]`

#### Example Response:
```json
[
  {
    "songNo": "2",
    "order": 37,
    "title": "天体観測",
    "titleKo": "텐카이칸소쿠",
    "aliasKo": "천체관측",
    "titleEn": null,
    "aliasEn": null,
    "romaji": "Tentai Kansoku",
    "bpm": {
      "min": 163,
      "max": 163
    },
    "bpmShiver": 0,
    "version": [
      "NAC",
      "AC6",
      "AC7",
      "AC8",
      "AC9",
      "AC10",
      "AC11",
      "AC12",
      "AC12.5",
      "AC13",
      "AC14",
      "PS4",
      "WiiU2",
      "Wii2",
      "PSPDX",
      "DS2",
      "PLUS"
    ],
    "isAsiaBanned": 0,
    "isKrBanned": 0,
    "genre": [
      "pops"
    ],
    "artists": [
      "BUMP OF CHICKEN"
    ],
    "addedDate": 1089849600000,
    "courses": {
      "easy": {
        "level": 3,
        "playTime": 89.82,
        "rollTime": [0.706],
        "maxCombo": 127,
        "maxDensity": 1.41,
        "dani": [
          {
            "version": "momoiro",
            "dan": "beginner",
            "order": 1
          }
        ],
        "images": [
          "https://file.taiko.wiki/img/eb3c2b9f-e89c-46e5-8eda-d279666e3356"
        ],
        "daniUsed": 1,
        "isBranched": 0,
        "balloon": []
      },
      "normal": {
        "level": 5,
        "playTime": 89.82,
        "rollTime": [0.706],
        "maxCombo": 173,
        "maxDensity": 1.93,
        "dani": [
          {
            "version": "blue",
            "dan": "9kyu",
            "order": 2
          }
        ],
        "images": [
          "https://file.taiko.wiki/img/bf6cfd4e-b1e7-402e-b5a1-d0134db0fb76"
        ],
        "daniUsed": 1,
        "isBranched": 0,
        "balloon": []
      },
      "hard": {
        "level": 4,
        "playTime": 89.82,
        "maxCombo": 268,
        "maxDensity": 2.98,
        "dani": [
          {
            "version": "sorairo",
            "dan": "2kyu",
            "order": 1
          }
        ],
        "images": [
          "https://file.taiko.wiki/img/e3f525bc-4699-4941-9807-acda09498833"
        ],
        "daniUsed": 1,
        "isBranched": 0,
        "balloon": [],
        "rollTime": []
      },
      "oni": {
        "level": 6,
        "playTime": 89.82,
        "maxCombo": 406,
        "maxDensity": 4.52,
        "dani": [
          {
            "version": "kimidori",
            "dan": "1dan",
            "order": 1
          },
          {
            "version": "23",
            "dan": "1kyu",
            "order": 3
          }
        ],
        "images": [
          "https://file.taiko.wiki/img/cde95257-ef33-4708-8467-c8fc118eca9c"
        ],
        "daniUsed": 1,
        "isBranched": 0,
        "balloon": [],
        "rollTime": []
      },
      "ura": null
    },
    "isDeleted": 0
  },
  {
    "songNo": "3",
    "order": 808,
    "title": "願いはエスペラント",
    "titleKo": "네가이와 에스페란토",
    "aliasKo": "소원은 에스페란토",
    "titleEn": null,
    "aliasEn": null,
    "romaji": "Negai wa Esperanto",
    "bpm": {
      "min": 170,
      "max": 170
    },
    "bpmShiver": 0,
    "version": [
      "NAC",
      "NS1",
      "PLUS",
      "RC"
    ],
    "isAsiaBanned": 0,
    "isKrBanned": 0,
    "genre": [
      "namco"
    ],
    "artists": [
      "岩瀬望",
      "アキたんと愉快な仲間たち"
    ],
    "addedDate": 1489536000000,
    "courses": {
      "easy": {
        "level": 4,
        "playTime": 136.94,
        "balloon": [7],
        "rollTime": [0.853, 0.853, 0.853],
        "maxCombo": 180,
        "maxDensity": 1.31,
        "dani": [],
        "images": [
          "https://file.taiko.wiki/img/ff65bec7-2866-4433-8ab7-931801153692"
        ],
        "daniUsed": 0,
        "isBranched": 0
      },
      "normal": {
        "level": 6,
        "playTime": 136.94,
        "balloon": [5, 8],
        "rollTime": [0.853, 0.853, 0.853],
        "maxCombo": 292,
        "maxDensity": 2.13,
        "dani": [],
        "images": [
          "https://file.taiko.wiki/img/c4820f94-3e61-4cf1-9497-cde6b8773064"
        ],
        "daniUsed": 0,
        "isBranched": 0
      },
      "hard": {
        "level": 6,
        "playTime": 136.94,
        "balloon": [6, 9],
        "rollTime": [0.853, 0.853, 0.853, 0.5, 0.5],
        "maxCombo": 378,
        "maxDensity": 2.76,
        "dani": [],
        "images": [
          "https://file.taiko.wiki/img/41c7cfe9-5a91-40cb-9144-fd4a1f82e6cd"
        ],
        "daniUsed": 0,
        "isBranched": 0
      },
      "oni": {
        "level": 7,
        "playTime": 136.94,
        "balloon": [10],
        "rollTime": [0.853, 0.853, 0.853, 0.5, 0.324, 0.676, 0.5],
        "maxCombo": 507,
        "maxDensity": 3.7,
        "dani": [
          {
            "version": "25",
            "dan": "1dan",
            "order": 3
          }
        ],
        "images": [
          "https://file.taiko.wiki/img/64b90439-c0cb-4032-9fd7-b3f1f6badb78"
        ],
        "daniUsed": 1,
        "isBranched": 0
      },
      "ura": null
    },
    "isDeleted": 0
  }
]
```
---

### 3. **GET `/song/all`**
#### Request data for all songs.
- **Query Params**: 
  - `after` (optional): Requests data for songs that have been updated since this time.

#### Example Request:
GET `/song/all?after=100`

---

### 4. **GET `/song/search`**
#### Search songs based on given filters.
- **Query Params**: 
  - `query` (optional): Search string (e.g., "Title").
  - `difficulty` (optional): Difficulty filter (e.g., "oni", "ura").
  - `level` (optional): Difficulty level as number.
  - `genre` (optional): Genre filter.

#### Example Request:
GET `song/search?query=memoria&difficulty=oni&level=10`

#### Example Response:
```json
[
  {
    "songNo": "905",
    "title": "memoria ficta",
    "titleKo": null,
    "aliasKo": null,
    "titleEn": null,
    "aliasEn": null,
    "romaji": null,
    "artists": [
      "Versus"
    ],
    "genre": [
      "namco"
    ],
    "level": {
      "easy": "4",
      "normal": "6",
      "hard": "7",
      "oni": "10",
      "ura": null
    }
  }
]
```
---

### 5. **GET `/rating`**
#### Request the rating information of a user.
- **Query Params**: 
  - `ratingdata` (optional): 
    - `'top50'` to request rating data for the top 50 songs.
    - `'all'` to request rating data for all songs.
- **Headers**
    - `x-api-key`: api key from `taiko.wiki`.

#### Example Request:
GET `/rating`

#### Example Response:
```json
{
  "donder": {
    "nickname": "닉네임",
    "taikoNumber": "북번호",
    "myDon": "https://img.taiko-p.jp/imgsrc.php?v=&kind=mydon&fn=mydon_북번호",
  },
  "currentRating": 10000,
}
```
---

### 6. **GET `/dani/version`**
#### Request dan-i dojo versions.
#### Example Request:
GET `/dani/version`

#### Example Response:
```json
["24","20","21","22","23","green","blue","yellow","red","white","murasaki","kimidori","momoiro","sorairo","katsudon","nijiiro_gaiden","25"]
```
---

### 7. **GET `/dani/version/{version}`**
#### Request dan-i dojo data for a specific version.
- **URL Params**: 
  - `version` (required): The version of the dan-i dojo (e.g., "v1.0").

#### Example Request:
GET `/dani/version/v1.0`

#### Example Response:
```json
{
  "version": "25",
  "data": [
    {
      "dan": "5kyu",
      "name": null,
      "version": "25",
      "songs": [
        {
          "songNo": "1327",
          "difficulty": "normal"
        },
        {
          "songNo": "1336",
          "difficulty": "normal"
        },
        {
          "songNo": "1339",
          "difficulty": "normal"
        }
      ],
      "conditions": [
        {
          "type": "gauge",
          "criteria": {
            "red": [92],
            "gold": []
          }
        },
        {
          "type": "hit",
          "criteria": {
            "red": [642],
            "gold": [664]
          }
        }
      ]
    },
    ...
  ]
}
```
---

### 8. **GET `/diffchart`**
#### Request diffchart data based on type and level.
- **Query Params**:
  - `type` (required): Type of diffchart (`'clear'`, `'fc'`, `'dfc'`).
  - `level` (required): Difficulty level.

#### Example Request:
GET `/diffchart?type=clear&level=10`

#### Example Response:
```json
{
  "name": "10 level clear",
  "level": 10,
  "type": "clear",
  "data": {
    "name": "10 level clear",
    "sections": [
      {
        "name": "SSS",
        "order": 0,
        "songs": [
          {
            "order": 0,
            "songNo": "765",
            "title": "第六天魔王",
            "difficulty": "ura"
          },
          ...
        ],
        "color": "#000000",
        "backgroundColor": "#000000"
      },
      ...
    ],
    "color": "#000000",
    "backgroundColor": "#000000"
  },
  "comment": ""
}
```