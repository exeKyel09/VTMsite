var app = angular.module("site");

app.service("ClanService", function(){

  this.filterClans = filterClans;

  this.clanFilters =
  [
    "All", "Thirteen", "Camarilla", "Sabbat", "Independent", "All Clans",
    "All Bloodlines", "Camarilla (clans only)", "Sabbat (clans only)",
    "Dark Ages", "High Clans", "Low Clans"
  ];

  this.clanList = [{
      id: 0, name: "Ahrimanes",
      filters: ["Sabbat", "All Bloodlines", "Dark Ages"],
      disciplines: ["Animalisme", "Puissance", "Spiritus"]
    },
    {
      id: 1, name: "Anda",
      filters: ["Independent", "All Bloodlines", "Dark Ages"],
      disciplines: ["Animalisme", "Endurance", "Protéisme"]
    },
    {
      id: 2, name: "Assamite",
      filters: ["Thirteen", "Independent", "All Clans",
        "Low Clans", "Dark Ages"
      ],
      disciplines: ["Célérité", "Occultation", "Quietus"]
    },
    {
      id: 3, name: "Baali",
      filters: ["Independent", "All Bloodlines", "Dark Ages"],
      disciplines: ["Daimonion", "Occultation", "Présence"]
    },
    {
      id: 4, name: "Blood Brothers",
      filters: ["Sabbat", "All Bloodlines"],
      disciplines: ["Endurance", "Puissance", "Sanguinus"]
    },
    {
      id: 5, name: "Brujah",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "High Clans", "Dark Ages"],
      disciplines: ["Célérité", "Puissance", "Présence"]
    },
    {
      id: 6, name: "Caitiff",
      filters: ["All Clans", "Dark Ages"],
      disciplines: []
    }, {
      id: 7, name: "Cappadocian",
      filters: ["All Clans", "Dark Ages", "High Clans"],
      disciplines: ["Auspex", "Endurance", "Nécromancie"]
    },
    {
      id: 8, name: "Children of Osiris",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Bardo", "2 other disciplines learned from original clan"]
    },
    {
      id: 9, name: "Daughters of Cacophony",
      filters: ["All Bloodlines"],
      disciplines: ["Endurance", "Melpominee", "Présence"]
    },
    {
      id: 10, name: "Followers of Set",
      filters: ["Thirteen", "Independent", "All Clans", "Dark Ages",
                "Low Clans"],
      disciplines: ["Occultation", "Présence", "Serpentis"]
    },
    {
      id: 11, name: "Gargoyles",
      filters: ["All Bloodlines"],
      disciplines: ["Flight", "Endurance", "Puissance", "Visceratika"]
    },
    {
      id: 12, name: "Gangrel",
      filters: ["Thirteen", "Independent", "All Clans", "Low Clans",
                "Dark Ages"],
      disciplines: ["Animalisme", "Endurance", "Protéisme"]
    },
    {
      id: 13, name: "Giovanni",
      filters: ["Thirteen", "Independent", "All Clans", "Dark Ages"],
      disciplines: ["Domination", "Nécromancie", "Puissance"]
    },
    {
      id: 14, name: "Harbingers of Skulls",
      filters: ["Sabbat", "All Bloodlines"],
      disciplines: ["Auspex", "Endurance", "Nécromancie"]
    },
    {
      id: 15, name: "Kiasyd",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Domination", "Obténébration", "Mytherceria"]
    },
    {
      id: 16, name: "Lamia",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Endurance", "Nécromancie", "Puissance"]
    },
    {
      id: 17, name: "Lasombra",
      filters: ["Thirteen", "Sabbat", "All Clans", "Sabbat (clans only)",
                "Dark Ages", "High Clans"],
      disciplines: ["Domination", "Obténébration", "Puissance"]
    },
    {
      id: 18, name: "Lhiannan",
      filters: ["Independent", "All Bloodlines", "Dark Ages"],
      disciplines: ["Animalisme", "Ogham", "Présence"]
    },
    {
      id: 19, name: "Malkavian",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "Low Clans"],
      disciplines: ["Auspex", "Aliénation", "Occultation"]
    },
    {
      id: 20, name: "Nagaraja",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Auspex", "Domination", "Nécromancie"]
    },
    {
      id: 21, name: "Noiad",
      filters: ["All Bloodlines", "Dark Ages"],
      disciplines: ["Animalisme", "Auspex", "Protéisme"]
    },
    {
      id: 22, name: "Nosferatu",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "Low Clans"],
      disciplines: ["Animalisme", "Occultation", "Puissance"]
    },
    {
      id: 23, name: "Old Clan Tzimisce",
      filters: ["Dark Ages, High Clans"],
      disciplines: ["Animalisme", "Auspex", "Domination"]
    },
    {
      id: 24, name: "Ravnos",
      filters: ["Thirteen", "Independent", "All Clans", "Dark Ages",
                "Low Clans"],
      disciplines: ["Animalisme", "Chimerstry", "Endurance"]
    },
    {
      id: 25, name: "Salubri",
      filters: ["Independent", "All Clans", "Dark Ages"],
      disciplines: ["Auspex", "Endurance", "Obeah", "Valeren"]
    },
    {
      id: 26, name: "Samedi",
      filters: ["All Bloodlines"],
      disciplines: ["Endurance", "Occultation", "Thanatosis"]
    },
    {
      id: 27, name: "Toreador",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "High Clans"],
      disciplines: ["Auspex", "Célérité", "Présence"]
    },
    {
      id: 28, name: "Tremere",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "Low Clans"],
      disciplines: ["Auspex", "Domination", "Thaumaturgie"]
    },
    {
      id: 29, name: "True Brujah",
      filters: ["All Bloodlines", "Independent", "Dark Ages"],
      disciplines: ["Puissance", "Présence", "Temporis"]
    },
    {
      id: 30, name: "Tzimisce",
      filters: ["Thirteen", "Sabbat", "All Clans", "Sabbat (clans only)",
                "Dark Ages", "High Clans"],
      disciplines: ["Animalisme", "Auspex", "Vicissitude"]
    },
    {
      id: 31, name: "Ventrue",
      filters: ["Thirteen", "Camarilla", "All Clans",
                "Camarilla (clans only)", "Dark Ages", "High Clans"],
      disciplines: ["Domination", "Endurance", "Présence"]
    }
  ];

  this.filteredClanList = this.clanList;
  this.selectedClan = this.filteredClanList[0];
  this.selectedClanFilter = this.clanFilters[0];

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

});
