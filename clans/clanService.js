var app = angular.module("site");

app.service("ClanService", ['DisciplineService', function(DisciplineService){

  this.filterClans = filterClans;
  this.setClan = setClan;

  this.clanFilters =
  [
    "All", "Thirteen", "Camarilla", "Sabbat", "Independent", "All Clans",
    "All Bloodlines", "Camarilla (clans only)", "Sabbat (clans only)",
    "Dark Ages", "High Clans", "Low Clans"
  ];

  this.clanList = [{
      id: 0, name: "Ahrimanes",
      filters: ["Sabbat", "All Bloodlines", "Dark Ages"],
      disciplines: ["Animalism", "Potence", "Spiritus"]
    },
    {
      id: 1, name: "Anda",
      filters: ["Independent", "All Bloodlines", "Dark Ages"],
      disciplines: ["Animalism", "Fortitude", "Protean"]
    },
    {
      id: 2, name: "Assamite",
      filters: ["Thirteen", "Independent", "All Clans",
        "Low Clans", "Dark Ages"
      ],
      disciplines: ["Celerity", "Obfuscate", "Quietus"]
    },
    {
      id: 3, name: "Baali",
      filters: ["Independent", "All Bloodlines", "Dark Ages"],
      disciplines: ["Daimonion", "Obfuscate", "Presence"]
    },
    {
      id: 4, name: "Blood Brothers",
      filters: ["Sabbat", "All Bloodlines"],
      disciplines: ["Fortitude", "Potence", "Sanguinus"]
    },
    {
      id: 5, name: "Brujah",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "High Clans", "Dark Ages"],
      disciplines: ["Celerity", "Potence", "Presence"]
    },
    {
      id: 6, name: "Caitiff",
      filters: ["All Clans", "Dark Ages"],
      disciplines: []
    }, {
      id: 7, name: "Cappadocian",
      filters: ["All Clans", "Dark Ages", "High Clans"],
      disciplines: ["Auspex", "Fortitude", "Necromancy"]
    },
    {
      id: 8, name: "Children of Osiris",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Bardo", "2 other disciplines learned from original clan"]
    },
    {
      id: 9, name: "Daughters of Cacophony",
      filters: ["All Bloodlines"],
      disciplines: ["Fortitude", "Melpominee", "Presence"]
    },
    {
      id: 10, name: "Followers of Set",
      filters: ["Thirteen", "Independent", "All Clans", "Dark Ages",
                "Low Clans"],
      disciplines: ["Obfuscate", "Presence", "Serpentis"]
    },
    {
      id: 11, name: "Gargoyles",
      filters: ["All Bloodlines"],
      disciplines: ["Flight", "Fortitude", "Potence", "Visceratika"]
    },
    {
      id: 12, name: "Gangrel",
      filters: ["Thirteen", "Independent", "All Clans", "Low Clans",
                "Dark Ages"],
      disciplines: ["Animalism", "Fortitude", "Protean"]
    },
    {
      id: 13, name: "Giovanni",
      filters: ["Thirteen", "Independent", "All Clans", "Dark Ages"],
      disciplines: ["Dominate", "Necromancy", "Potence"]
    },
    {
      id: 14, name: "Harbingers of Skulls",
      filters: ["Sabbat", "All Bloodlines"],
      disciplines: ["Auspex", "Fortitude", "Necromancy"]
    },
    {
      id: 15, name: "Kiasyd",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Dominate", "Obtenebration", "Mytherceria"]
    },
    {
      id: 16, name: "Lamia",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Fortitude", "Necromancy", "Potence"]
    },
    {
      id: 17, name: "Lasombra",
      filters: ["Thirteen", "Sabbat", "All Clans", "Sabbat (clans only)",
                "Dark Ages", "High Clans"],
      disciplines: ["Dominate", "Obtenebration", "Potence"]
    },
    {
      id: 18, name: "Lhiannan",
      filters: ["Independent", "All Bloodlines", "Dark Ages"],
      disciplines: ["Animalism", "Ogham", "Presence"]
    },
    {
      id: 19, name: "Malkavian",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "Low Clans"],
      disciplines: ["Auspex", "Dementation", "Obfuscate"]
    },
    {
      id: 20, name: "Nagaraja",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Auspex", "Dominate", "Necromancy"]
    },
    {
      id: 21, name: "Noiad",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Animalism", "Auspex", "Protean"]
    },
    {
      id: 22, name: "Nosferatu",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "Low Clans"],
      disciplines: ["Animalism", "Obfuscate", "Potence"]
    },
    {
      id: 23, name: "Ravnos",
      filters: ["Thirteen", "Independent", "All Clans", "Dark Ages",
                "Low Clans"],
      disciplines: ["Animalism", "Chimerstry", "Fortitude"]
    },
    {
      id: 24, name: "Salubri",
      filters: ["Independent", "All Clans", "Dark Ages"],
      disciplines: ["Auspex", "Fortitude", "Obeah", "Valeren"]
    },
    {
      id: 25, name: "Samedi",
      filters: ["All Bloodlines"],
      disciplines: ["Fortitude", "Obfuscate", "Thanatosis"]
    },
    {
      id: 26, name: "Toreador",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "High Clans"],
      disciplines: ["Auspex", "Celerity", "Presence"]
    },
    {
      id: 27, name: "Tremere",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "Low Clans"],
      disciplines: ["Auspex", "Dominate", "Thaumaturgy"]
    },
    {
      id: 28, name: "Tzimisce",
      filters: ["Thirteen", "Sabbat", "All Clans", "Sabbat (clans only)",
                "Dark Ages", "High Clans"],
      disciplines: ["Animalism", "Auspex", "Vicissitude"]
    },
    {
      id: 29, name: "Ventrue",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "High Clans"],
      disciplines: ["Dominate", "Fortitude", "Presence"]
    }
  ];

  this.filteredClanList = this.clanList;
  this.selectedClan = this.filteredClanList[0];

  function setClan(clan){
    this.selectedClan = clan;
    this.selectedClanDisciplines = [
      new Discipline(this.selectedClan.disciplines[0]),
      new Discipline(this.selectedClan.disciplines[1]),
      new Discipline(this.selectedClan.disciplines[2])
  ];
  }


  this.selectedClanFilter = this.clanFilters[0];

  class Discipline {
    constructor(name){
      this.name = name;
      this.pointCount = 0;
      this.points = [{id: 0, img: "./empty.png"},
                     {id: 1, img: "./empty.png"},
                     {id: 2, img: "./empty.png"},
                     {id: 3, img: "./empty.png"},
                     {id: 4, img: "./empty.png"}];

      this.reset = function(){
        this.points.forEach(function(ability){
          ability.img = './empty.png';
        });
        this.pointCount = 0;
      };

      this.select = function(index){
        if(index == -1){
          this.reset();
          return;
        }
       if(this.points[index].img=="./full.png")
       {
         this.points.forEach(function(point){
           if(point.id <= index){
             return;
           }
           else{
             point.img = "./empty.png";
           }
         });
       }
       if(this.points[index].img=="./empty.png")
       {
         this.points.forEach(function(point){
           if(point.id > index){
             return;
           }
           else{
             point.img = "./full.png";
           }
         });
       }
      };
    }
  };

  this.selectedClanDisciplines = [
    new Discipline(this.selectedClan.disciplines[0]),
    new Discipline(this.selectedClan.disciplines[1]),
    new Discipline(this.selectedClan.disciplines[2])
];

  function filterClans(filter) {
    this.filteredClanList = [];
    if (filter === 'All') {
      this.filteredClanList = this.clanList;
      return this.filteredClanList;
    }
    for(var i = 0; i<this.clanList.length; i++){
      if(this.clanList[i].filters.includes(filter)){
        this.filteredClanList.push(this.clanList[i]);
      }
    }
    return this.filteredClanList;
  };
}]);
