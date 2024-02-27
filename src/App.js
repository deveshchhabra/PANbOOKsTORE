import './App.css';
const Title=()=>
  (
<a href="/">
  <img className='logo' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-book-store-logo-template-sale-learning-logo-designs-vector-png-image_5272617.jpg" />
</a>
    )

const Header=()=>{
  return(
    <div className='header'>
      {<Title/>}
      <div className='nav-item'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )

}
const App=()=> {
  return (
    <div >
      <Header />
      <Body />
    </div>
  );
}

const BookList={
  "componentChunkName": "component---node-modules-panmacmillan-gatsby-theme-panmacmillan-src-templates-contributor-contributor-tsx",
  "path": "/authors/neal-asher/2262",
  "result": {
    "data": {
      "panMacmillanContributor": {
        "id": "f4e35b64-0146-5201-857c-3dca6b537619",
        "slug": "authors/neal-asher/2262",
        "contributorID": "2262-onix",
        "personName": "Neal Asher",
        "biography": "Neal Asher divides his time between Essex and Crete, mostly at a keyboard and mentally light years away. His full-length novels are as follows. First is the Agent Cormac series: <i>Gridlinked</i>, <i>The Line of Polity</i>, <i>Brass Man</i>, <i>Polity Agent</i> and <i>Line</i> <i>War</i>. Next comes the Spatterjay series: <i>The</i> <i>Skinner</i>, <i>The Voyage of the Sable Keech</i> and <i>Orbus</i>. Also set in the same world of the Polity are these standalone novels: <i>Hilldiggers</i>, <i>Prador Moon</i>, <i>Shadow of the Scorpion</i>,<i> The Technician</i>, <i>Jack Four</i> and <i>Weaponized</i>. The Transformation trilogy is also based in the Polity: <i>Dark Intelligence</i>, <i>War Factory</i> and <i>Infinity Engine</i>. Set in a dystopian future are <i>The Departure</i>, <i>Zero Point </i>and<i> Jupiter War</i>, while <i>Cowl</i> takes us across time. The Rise of the Jain trilogy is comprised of <i>The Soldier</i>, <i>The Warship </i>and <i>The Human</i>, and is also set in the Polity universe.",
        "primaryEditions": [
          {
            "isbn": "9781035037988",
            "title": "World Walkers",
            "titleFull": "World Walkers",
            "primaryContributorName": "Neal Asher",
            "format": "BB",
            "fields": {
              "slug": "authors/neal-asher/world-walkers/9781035037988"
            },
            "isPrimaryEdition": true,
            "collection": null,
            "id1":1816446,
            "id2":102809,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1816446&cat=default&size=amazon&id=102809",
            "remoteImage": null,
            "dimensions": {
              "width": 153,
              "height": 234
            }
          },
          {
            "isbn": "9781529050103",
            "title": "War Bodies",
            "titleFull": "War Bodies",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/war-bodies/9781529050103"
            },
            "isPrimaryEdition": true,
            "collection": null,
            "id1":1730961,
            "id2":89821,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1730961&cat=default&size=amazon&id=89821",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 196
            }
          },
          {
            "isbn": "9781529050059",
            "title": "Weaponized",
            "titleFull": "Weaponized",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/weaponized/9781529050059"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:1515247,
            id2:89816,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1515247&cat=default&size=amazon&id=89816",
            "remoteImage": null,
            "dimensions": {
              "width": 132,
              "height": 198
            }
          },
          {
            "isbn": "9781529049992",
            "title": "Jack Four",
            "titleFull": "Jack Four",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/jack-four/9781529049992"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:1358535,
            id2:89811,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1358535&cat=default&size=amazon&id=89811",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 196
            }
          },
          {
            "isbn": "9781509868513",
            "title": "Dark Intelligence",
            "titleFull": "Dark Intelligence",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/dark-intelligence/9781509868513"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac31565",
                "collectionTitle": "Transformation"
              }
            ],
            id1:1095099,
            id2:78887,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1095099&cat=default&size=amazon&id=78887",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781509868520",
            "title": "War Factory",
            "titleFull": "War Factory",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/war-factory/9781509868520"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac31565",
                "collectionTitle": "Transformation"
              }
            ],
            id1:1095114,
            id2:78888,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1095114&cat=default&size=amazon&id=78888",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 196
            }
          },
          {
            "isbn": "9781509868537",
            "title": "Infinity Engine",
            "titleFull": "Infinity Engine",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/infinity-engine/9781509868537"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac31565",
                "collectionTitle": "Transformation"
              }
            ],
            id1:1095128,
            id2:78889,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1095128&cat=default&size=amazon&id=78889",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 197
            }
          },
          {
            "isbn": "9781509862467",
            "title": "Human",
            "titleFull": "The Human",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-human/9781509862467"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac36768",
                "collectionTitle": "Rise of the Jain"
              }
            ],
            id1:1171862,
            id2:77710,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1171862&cat=default&size=amazon&id=77710",
            "remoteImage": null,
            "dimensions": {
              "width": 132,
              "height": 197
            }
          },
          {
            "isbn": "9781509868544",
            "title": "Departure",
            "titleFull": "The Departure",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-departure/9781509868544"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24569",
                "collectionTitle": "Owner series"
              }
            ],
            id1:1143712,
            id2:78890,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1143712&cat=default&size=amazon&id=78890",
            "remoteImage": null,
            "dimensions": {
              "width": 129,
              "height": 197
            }
          },
          {
            "isbn": "9781509868551",
            "title": "Zero Point",
            "titleFull": "Zero Point",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/zero-point/9781509868551"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24569",
                "collectionTitle": "Owner series"
              }
            ],
            id1:1143740,
            id2:78891,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1143740&cat=default&size=amazon&id=78891",
            "remoteImage": null,
            "dimensions": {
              "width": 129,
              "height": 196
            }
          },
          {
            "isbn": "9781509868568",
            "title": "Jupiter War",
            "titleFull": "Jupiter War",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/jupiter-war/9781509868568"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24569",
                "collectionTitle": "Owner series"
              }
            ],
            id1:1143726,
            id2:78892,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1143726&cat=default&size=amazon&id=78892",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 198
            }
          },
          {
            "isbn": "9781509862511",
            "title": "Warship",
            "titleFull": "The Warship",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-warship/9781509862511"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac36768",
                "collectionTitle": "Rise of the Jain"
              }
            ],
            id1:1089070,
            id2:77705,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1089070&cat=default&size=amazon&id=77705",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781509868490",
            "title": "Technician",
            "titleFull": "The Technician",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-technician/9781509868490"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:1008409,
            id2:78885,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=&cat=default&size=amazon&id=78885",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 197
            }
          },
          {
            "isbn": "9781509868506",
            "title": "Gabble - And Other Stories",
            "titleFull": "The Gabble - And Other Stories",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-gabble-and-other-stories/9781509868506"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:1008423,
            id2:78886,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1008423&cat=default&size=amazon&id=78886",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781529002287",
            "title": "Cowl",
            "titleFull": "Cowl",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/cowl/9781529002287"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:1008395,
            id2:82971,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=1008395&cat=default&size=amazon&id=82971",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781509868469",
            "title": "Prador Moon",
            "titleFull": "Prador Moon",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/prador-moon/9781509868469"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:859308,
            id2:78882,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=859308&cat=default&size=amazon&id=78882",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 196
            }
          },
          {
            "isbn": "9781509868476",
            "title": "Hilldiggers",
            "titleFull": "Hilldiggers",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/hilldiggers/9781509868476"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:859364,
            id2:78883,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=859364&cat=default&size=amazon&id=78883",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 197
            }
          },
          {
            "isbn": "9781509868483",
            "title": "Shadow of the Scorpion",
            "titleFull": "Shadow of the Scorpion",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/shadow-of-the-scorpion/9781509868483"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:882233,
            id2:78884,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=882233&cat=default&size=amazon&id=78884",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 196
            }
          },
          {
            "isbn": "9781509868438",
            "title": "Skinner",
            "titleFull": "The Skinner",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-skinner/9781509868438"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac28526",
                "collectionTitle": "Spatterjay"
              }
            ],
            id1:835275,
            id2:78879,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=835275&cat=default&size=amazon&id=78879",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 198
            }
          },
          {
            "isbn": "9781509868445",
            "title": "Voyage of the Sable Keech",
            "titleFull": "The Voyage of the Sable Keech",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-voyage-of-the-sable-keech/9781509868445"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac28526",
                "collectionTitle": "Spatterjay"
              }
            ],
            id1:835363,
            id2:78880,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=835363&cat=default&size=amazon&id=78880",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 196
            }
          },
          {
            "isbn": "9781509868452",
            "title": "Orbus",
            "titleFull": "Orbus",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/orbus/9781509868452"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac28526",
                "collectionTitle": "Spatterjay"
              }
            ],
            id1:835317,
            id2:78881,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=835317&cat=default&size=amazon&id=78881",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781509862412",
            "title": "Soldier",
            "titleFull": "The Soldier",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-soldier/9781509862412"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac36768",
                "collectionTitle": "Rise of the Jain"
              }
            ],
            id1:886318,
            id2:77700,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=886318&cat=default&size=amazon&id=77700",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 196
            }
          },
          {
            "isbn": "9781509868391",
            "title": "Line War",
            "titleFull": "Line War",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/line-war/9781509868391"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24568",
                "collectionTitle": "Agent Cormac"
              }
            ],
            id1:79985,
            id2:78875,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=799853&cat=default&size=amazon&id=78875",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 196
            }
          },
          {
            "isbn": "9781509868421",
            "title": "Polity Agent",
            "titleFull": "Polity Agent",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/polity-agent/9781509868421"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24568",
                "collectionTitle": "Agent Cormac"
              }
            ],
            id1:799839,
            id2:78878,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=799839&cat=default&size=amazon&id=78878",
            "remoteImage": null,
            "dimensions": {
              "width": 132,
              "height": 197
            }
          },
          {
            "isbn": "9781509868384",
            "title": "Gridlinked",
            "titleFull": "Gridlinked",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/gridlinked/9781509868384"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24568",
                "collectionTitle": "Agent Cormac"
              }
            ],
            id1:799825,
            id2:78874,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=799825&cat=default&size=amazon&id=78874",
            "remoteImage": null,
            "dimensions": {
              "width": 131,
              "height": 197
            }
          },
          {
            "isbn": "9781509868407",
            "title": "Line of Polity",
            "titleFull": "The Line of Polity",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/the-line-of-polity/9781509868407"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24568",
                "collectionTitle": "Agent Cormac"
              }
            ],
            id1:828008,
            id2:78876,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=828008&cat=default&size=amazon&id=78876",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781509868414",
            "title": "Brass Man",
            "titleFull": "Brass Man",
            "primaryContributorName": "Neal Asher",
            "format": "BC",
            "fields": {
              "slug": "authors/neal-asher/brass-man/9781509868414"
            },
            "isPrimaryEdition": true,
            "collection": [
              {
                "collectionIdentifier": "PanMac24568",
                "collectionTitle": "Agent Cormac"
              }
            ],
            id1:799811,
            id2:78877,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=799811&cat=default&size=amazon&id=78877",
            "remoteImage": null,
            "dimensions": {
              "width": 130,
              "height": 197
            }
          },
          {
            "isbn": "9781447215394",
            "title": "Snow in the Desert (Short Reads)",
            "titleFull": "Snow in the Desert (Short Reads)",
            "primaryContributorName": "Neal Asher",
            "format": "ED",
            "fields": {
              "slug": "authors/neal-asher/snow-in-the-desert-short-reads/9781447215394"
            },
            "isPrimaryEdition": true,
            "collection": null,
            id1:44911,
            id2:28622,
            "sourceImagePath": "https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid=44911&cat=default&size=amazon&id=28622",
            "remoteImage": null,
            "dimensions": {
              "width": null,
              "height": null
            }
          }
        ],
        "sourceImagePath": "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/contributor/2262.jpg",
        "remoteImage": null,
        "relatedArticles": [
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/introduction-polity-universe-neal-asher"
            },
            "elements": {
              "title": {
                "value": "An Introduction to Neal Asher's Polity Universe books"
              },
              "url_slug": {
                "value": "introduction-polity-universe-neal-asher"
              },
              "display_date": {
                "value": "07/06/2021"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/1cf2b3ac-f5f6-4869-844d-b9c6d1bda1d4/neal-asher-polity-universe-header-min-min.jpg",
                    "type": "image/jpeg",
                    "size": 309478,
                    "name": "neal-asher-polity-universe-header-min-min.jpg",
                    "height": 900,
                    "description": "Neal Asher book covers"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/best-science-fiction-and-fantasy-books"
            },
            "elements": {
              "title": {
                "value": "Best books of 2018: science fiction and fantasy"
              },
              "url_slug": {
                "value": "best-science-fiction-and-fantasy-books"
              },
              "display_date": {
                "value": "30/11/2018"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/d5e51f24-d3e0-4f26-b477-70080dbfecd1/Best-books-of-2018-science-fiction-and-fantasy---Header.jpg",
                    "type": "image/jpeg",
                    "size": 120241,
                    "name": "Best-books-of-2018-science-fiction-and-fantasy---Header.jpg",
                    "height": 900,
                    "description": "Covers of the 6 books: Spinning Silver, Bright Ruin, the Soldier, Head On and Salvation, on a background of stars"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/neal-asher-gridlinked-polity-new-book"
            },
            "elements": {
              "title": {
                "value": "Designing the future: a new look for Neal Asher"
              },
              "url_slug": {
                "value": "neal-asher-gridlinked-polity-new-book"
              },
              "display_date": {
                "value": "11/12/2017"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/3f46de6f-8337-4557-b05e-4eb2b0ad4759/neal-asher-gridlinked-book-new-cover-2018-min.jpg",
                    "type": "image/jpeg",
                    "size": 206916,
                    "name": "neal-asher-gridlinked-book-new-cover-2018-min.jpg",
                    "height": 900,
                    "description": "Neal Asher Gridlinked book cover"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/new-trilogy-neal-asher-tor-polity-universe"
            },
            "elements": {
              "title": {
                "value": "Discover Neal Asher's Rise of the Jain trilogy"
              },
              "url_slug": {
                "value": "new-trilogy-neal-asher-tor-polity-universe"
              },
              "display_date": {
                "value": "09/06/2017"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1000,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/068692b6-5ffa-42ae-9a96-dc46c7c587cb/Discover%20Neal%20Asher%27s%20Rise%20of%20the%20Jain%20trilogy%20-%20Header.jpg",
                    "type": "image/jpeg",
                    "size": 93136,
                    "name": "Discover Neal Asher's Rise of the Jain trilogy - Header.jpg",
                    "height": 563,
                    "description": null
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/jupiter-war-in-paperback-and-the-neal-asher-interview"
            },
            "elements": {
              "title": {
                "value": "Jupiter War in paperback and the Neal Asher interview"
              },
              "url_slug": {
                "value": "jupiter-war-in-paperback-and-the-neal-asher-interview"
              },
              "display_date": {
                "value": "09/04/2014"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 570,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/9415ea87-2eb3-4365-9d52-f2423eaa9cee/JUPITER%20WAR%20IN%20PAPERBACK%20AND%20THE%20NEAL%20ASHER%20INTERVIEW.jpg",
                    "type": "image/jpeg",
                    "size": 93674,
                    "name": "JUPITER WAR IN PAPERBACK AND THE NEAL ASHER INTERVIEW.jpg",
                    "height": 320,
                    "description": "Jupiter War Paperback detail"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/neal-asher-questions-polity-universe"
            },
            "elements": {
              "title": {
                "value": "Neal Asher, author of Infinity Engine Q&A "
              },
              "url_slug": {
                "value": "neal-asher-questions-polity-universe"
              },
              "display_date": {
                "value": "07/03/2017"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/a4cc477e-c561-40bb-b11d-efb8480b9486/5-questions-with-neal-asher-header.png",
                    "type": "image/png",
                    "size": 483586,
                    "name": "5-questions-with-neal-asher-header.png",
                    "height": 900,
                    "description": "Infinity Engine - Neal Asher"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/neal-asher-origins-the-soldier-rise-of-the-jain"
            },
            "elements": {
              "title": {
                "value": "Neal Asher on the origins of The Soldier"
              },
              "url_slug": {
                "value": "neal-asher-origins-the-soldier-rise-of-the-jain"
              },
              "display_date": {
                "value": "16/05/2018"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/b4f990dc-9410-4102-a0a5-af612e4cfbe0/the%20soldier%20-%20neal%20asher%20-%20SFF.jpg",
                    "type": "image/jpeg",
                    "size": 300387,
                    "name": "the soldier - neal asher - SFF.jpg",
                    "height": 900,
                    "description": "The Soldier book cover against a background showing a spaceship surrounded planets"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/literary/the-best-dystopian-novels-of-all-time"
            },
            "elements": {
              "title": {
                "value": "25 of the best dystopian novels of all time"
              },
              "url_slug": {
                "value": "the-best-dystopian-novels-of-all-time"
              },
              "display_date": {
                "value": "26/02/2024"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Literary"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/c1aec57e-abf6-45f9-a187-0d9227ee5cd9/The-best-dystopian-novels-of-all-time---Header.jpg",
                    "type": "image/jpeg",
                    "size": 340577,
                    "name": "The-best-dystopian-novels-of-all-time---Header.jpg",
                    "height": 900,
                    "description": "A close up of letter written on a typewriter with large parts of the content censored by black stips"
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/best-new-science-fiction-books"
            },
            "elements": {
              "title": {
                "value": "40 best sci-fi books of all time"
              },
              "url_slug": {
                "value": "best-new-science-fiction-books"
              },
              "display_date": {
                "value": "26/02/2024"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/d1a066e4-949a-45b4-8333-9de3e9d8c99f/Best-sci-fi-books.jpg",
                    "type": "image/jpeg",
                    "size": 481094,
                    "name": "Best-sci-fi-books.jpg",
                    "height": 900,
                    "description": "A blue sparkly background of space with five book covers overlaid: In the Lives of Puppets, Starship Titanic, War Bodies, Fractal Noise and Sea of Tranquility."
                  }
                ]
              }
            }
          },
          {
            "fields": {
              "slug": "blogs/science-fiction-and-fantasy/owner-series-science-inspiration-robots-hud"
            },
            "elements": {
              "title": {
                "value": "Neal Asher on the Owner series and the science that inspired it"
              },
              "url_slug": {
                "value": "owner-series-science-inspiration-robots-HUD"
              },
              "display_date": {
                "value": "24/09/2013"
              },
              "article_categories": {
                "value": [
                  {
                    "name": "Science Fiction & Fantasy"
                  }
                ]
              },
              "image": {
                "value": [
                  {
                    "width": 1600,
                    "url": "https://assets-eu-01.kc-usercontent.com:443/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/b695d0d3-15d4-4027-9ddb-76d2c5486e8e/Neal-Asher-on-the-Owner-series-and-the-science-that-inspired-it-Header.jpg",
                    "type": "image/jpeg",
                    "size": 215652,
                    "name": "Neal-Asher-on-the-Owner-series-and-the-science-that-inspired-it-Header.jpg",
                    "height": 900,
                    "description": "Section of The Departure book cover showing part of a spaceship. "
                  }
                ]
              }
            }
          }
        ],
        "additionalContributorDetails": [
          
        ]
      }
    },
    "pageContext": {
      "id": "f4e35b64-0146-5201-857c-3dca6b537619"
    }
  },
  "staticQueryHashes": [
    "2423834138"
  ],
  "slicesMap": {
    "Footer": "Footer",
    "Header": "Header"
  }
}
const RestaurantCard=({title,id1,id2})=>{
  return(
    <div className='card'>
 
    <img src={'https://dam.bibliolive.com/macmillanuk-dam/getimage.aspx?class=books&assetversionid='+id1+'&cat=default&size=amazon&id='+id2}> 
    </img>
     

      <h2>{title}</h2>

    </div>
  )
}
const Body=()=>{
  return (
    <div className='book-list'>
    <RestaurantCard {...BookList.result.data.panMacmillanContributor.primaryEditions[0]}/>
      {
        BookList.result.data.panMacmillanContributor.primaryEditions.map((res)=>{
          return <RestaurantCard {...res} />;
        })}
    </div>
  )
}

export default App;
